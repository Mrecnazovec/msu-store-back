import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
export declare class StoreController {
    private readonly storeService;
    constructor(storeService: StoreService);
    getById(storeId: string, userId: string, role: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: string | null;
    }>;
    create(userId: string, role: string, dto: CreateStoreDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: string | null;
    }>;
    update(storeId: string, userId: string, role: string, dto: UpdateStoreDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: string | null;
    }>;
    delete(storeId: string, userId: string, role: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: string | null;
    }>;
}
