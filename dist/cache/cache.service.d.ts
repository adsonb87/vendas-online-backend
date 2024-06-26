import { Cache } from '@nestjs/cache-manager';
export declare class CacheService {
    private cacheManager;
    constructor(cacheManager: Cache);
    getCache<T>(key: string, functionRequest: () => Promise<T>): Promise<T>;
}
