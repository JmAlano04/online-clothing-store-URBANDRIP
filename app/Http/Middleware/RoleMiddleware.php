<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next,$roles): Response
    {
        
    if (!auth()->check()) {
        abort(403)->message('Unauthorized');
    }

    $rolesArray = explode(',', $roles);

    if (!in_array(auth()->user()->role, $rolesArray)) {
        abort(403)->message('Unauthorized');
    }

    return $next($request);     
    }
}
