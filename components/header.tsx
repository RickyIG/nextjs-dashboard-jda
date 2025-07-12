import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

const headerStyle: React.CSSProperties = {
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '16px 24px',
    textAlign: 'center',
    position: 'relative',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const Header: React.FC = () => {
    return (
        <header style={headerStyle}>
            <h1>My Simple Store</h1>
            <div style={{position: 'absolute', top: 16, right: 24}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div style={{display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'}}>
                                <Avatar>
                                    <AvatarImage src="/sample-avatar.png" alt="Avatar" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                <span style={{color: 'white', fontWeight: 500, fontSize: '1rem'}}>Menu</span>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                                <Link href="/profile">Profile</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;