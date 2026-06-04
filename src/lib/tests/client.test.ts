import { describe, it, expect } from '@jest/globals';
import { SMTP2GOError } from '../client';

describe('SMTP2GOError', () => {
    it('is an instance of Error', () => {
        const err = new SMTP2GOError('something went wrong');
        expect(err instanceof Error).toBe(true);
    });

    it('has correct name, message, status, and response', () => {
        const body = { error: 'Unauthorised' };
        const err = new SMTP2GOError('Request failed', 401, body);
        expect(err.name).toBe('SMTP2GOError');
        expect(err.message).toBe('Request failed');
        expect(err.status).toBe(401);
        expect(err.response).toBe(body);
    });

    it('works without optional status and response', () => {
        const err = new SMTP2GOError('Network error');
        expect(err.status).toBeUndefined();
        expect(err.response).toBeUndefined();
    });
});
