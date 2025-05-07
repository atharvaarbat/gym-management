'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { Loader2 } from 'lucide-react';

type Props = {
    children: React.ReactNode
}

const OTP = ({ children }: Props) => {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Check localStorage on initial render
    useEffect(() => {
        const storedPin = localStorage.getItem('pin');
        if (storedPin) {
            setValue(storedPin);
        }
        setIsLoading(false);
    }, []);

    const handleChange = (newValue: string) => {
        setValue(newValue);
        // Only update localStorage when we have a complete PIN
        if (newValue.length === 4) {
            localStorage.setItem('pin', newValue);
        }
    };

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-background flex items-center justify-center z-60">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        );
    }

    if (value === '1210') {
        return <>{children}</>;
    }

    return (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-60">
            <Card className=''>
                <CardHeader>
                    <CardTitle>Enter PIN</CardTitle>
                </CardHeader>
                <CardContent>
                    <InputOTP
                        maxLength={4}
                        value={value}
                        onChange={handleChange}
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                        </InputOTPGroup>
                    </InputOTP>
                </CardContent>
            </Card>
        </div>
    );
};

export default OTP;


