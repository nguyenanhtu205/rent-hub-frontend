import { create } from 'zustand';
import type { InternalUser, Role } from '../types/internal';

const MOCK_USERS: Record<Role, InternalUser> = {
  broker: { id: 'u1', name: 'Nguyễn Minh Tuấn', email: 'tuan.broker@renthub.vn', role: 'broker' },
  valuator: { id: 'u2', name: 'Trần Thị Lan', email: 'lan.valuator@renthub.vn', role: 'valuator' },
  legal: { id: 'u3', name: 'Lê Văn Pháp', email: 'phap.legal@renthub.vn', role: 'legal' },
  accountant: { id: 'u4', name: 'Phạm Kế Toán', email: 'ke.toán@renthub.vn', role: 'accountant' },
  manager: { id: 'u5', name: 'Hoàng Quản Lý', email: 'ql@renthub.vn', role: 'manager' },
};

type AuthState = {
  user: InternalUser;
  setRole: (r: Role) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: MOCK_USERS.broker,
  setRole: (r) => set({ user: MOCK_USERS[r] }),
}));
