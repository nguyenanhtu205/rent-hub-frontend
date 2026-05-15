import MockAdapter from 'axios-mock-adapter';
import axiosPublic from '../../utils/axiosPublic';
import axiosPrivate from '../../utils/axiosPrivate';
import { MOCK_USERS } from '../data/mockData';

const MOCK_ACCESS_TOKEN = 'mock-access-token-xyz';
// const MOCK_REFRESH_TOKEN = 'mock-refresh-token-abc';

// ─── Setup mock adapters ──────────────────────────────────────────────────────
const mockPublic = new MockAdapter(axiosPublic, { delayResponse: 500 });
const mockPrivate = new MockAdapter(axiosPrivate, { delayResponse: 300 });

// POST /auth/login
mockPublic.onPost('/auth/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);
  const user = MOCK_USERS.find((u) => u.email === email && u.password === password);

  if (!user) {
    return [401, { message: 'Email hoặc mật khẩu không đúng' }];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...userWithoutPassword } = user;

  // Trong thực tế backend sẽ set httpOnly cookie refresh_token
  // Mock: chỉ trả accessToken và user về body
  return [200, { accessToken: MOCK_ACCESS_TOKEN, user: userWithoutPassword }];
});

// POST /auth/refresh-token
mockPublic.onPost('/auth/refresh-token').reply(200, {
  accessToken: MOCK_ACCESS_TOKEN,
});

// GET /logged-in-user
mockPrivate.onGet('/logged-in-user').reply((config) => {
  const auth = config.headers?.Authorization;
  if (!auth || auth !== `Bearer ${MOCK_ACCESS_TOKEN}`) {
    return [401, { message: 'Unauthorized' }];
  }

  // Trả user đầu tiên làm mock (thực tế backend đọc từ JWT)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...user } = MOCK_USERS[0];
  return [200, { user }];
});

// POST /auth/logout
mockPrivate.onPost('/auth/logout').reply(200, { message: 'Logged out' });
