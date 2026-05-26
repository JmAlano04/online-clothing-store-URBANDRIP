import React, { useEffect, useRef, useState } from 'react';
import { router } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type FieldType = 'text' | 'email' | 'password' | 'select';

interface FieldOption {
    label: string;
    value: string;
}

interface FieldConfig {
    name: string;
    label: string;
    type?: FieldType;
    placeholder?: string;
    required?: boolean;
    options?: FieldOption[];
}

interface ReusableFormModalProps<T extends Record<string, any>> {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    endpoint: string;           // ✅ no hardcoded default
    method?: 'post' | 'put' | 'patch';
    fields: FieldConfig[];
    initialValues: T;
    submitLabel?: string;
    loadingLabel?: string;
    onSuccess?: () => void;
}

export default function ReusableFormModal<T extends Record<string, any>>({
    isOpen,
    onOpenChange,
    title,
    description,
    endpoint,
    method = 'post',
    fields,
    initialValues,
    submitLabel = 'Submit',
    loadingLabel = 'Submitting...',
    onSuccess,
}: ReusableFormModalProps<T>) {
    const [formData, setFormData] = useState<T>(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ✅ use a ref to avoid infinite re-renders from object identity change
    const initialValuesRef = useRef(initialValues);

    useEffect(() => {
        if (isOpen) {
            setFormData(initialValuesRef.current);
            setErrors({});
        }
    }, [isOpen]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleClose = () => {
        setFormData(initialValuesRef.current);
        setErrors({});
        onOpenChange(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        router[method](endpoint, formData, {
            onSuccess: () => {
                handleClose();
                onSuccess?.();
            },
            onError: (err) => {
                setErrors(err);
            },
            onFinish: () => {
                setIsSubmitting(false);
            },
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {fields.map((field) => (
                        <div key={field.name} className="space-y-2">
                            <Label htmlFor={field.name}>
                                {field.label}
                                {field.required && (
                                    <span className="ml-1 text-red-500">*</span>
                                )}
                            </Label>

                            {field.type === 'select' ? (
                                <select
                                    id={field.name}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleInputChange}
                                    required={field.required}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                    {/* ✅ default empty option so user must choose */}
                                    <option value="" disabled>
                                        Select {field.label}...
                                    </option>
                                    {field.options?.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type || 'text'}
                                    placeholder={field.placeholder}
                                    value={formData[field.name]}
                                    onChange={handleInputChange}
                                    required={field.required}
                                />
                            )}

                            {/* ✅ show server-side validation errors */}
                            {errors[field.name] && (
                                <p className="text-sm text-red-500">
                                    {errors[field.name]}
                                </p>
                            )}
                        </div>
                    ))}

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleClose}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? loadingLabel : submitLabel}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}