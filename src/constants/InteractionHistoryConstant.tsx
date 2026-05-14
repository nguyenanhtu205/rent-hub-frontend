import { Home, Mail, MessageCircle, Phone } from 'lucide-react';

export const INTERACTIONS = [
  {
    date: '2025-05-12',
    client: 'Lê Minh Khoa',
    broker: 'Nguyễn Minh Tuấn',
    type: 'Gọi điện',
    note: 'Khách quan tâm Studio Tây Hồ. Đặt lịch xem ngày 14/5.',
  },
  {
    date: '2025-05-11',
    client: 'Bùi Thu Hà',
    broker: 'Nguyễn Minh Tuấn',
    type: 'Zalo/Chat',
    note: 'Gửi thông tin Vinhomes 2PN. Khách đang cân nhắc.',
  },
  {
    date: '2025-05-10',
    client: 'Trần Công Danh',
    broker: 'Lê Thanh Sơn',
    type: 'Xem nhà',
    note: 'Xem Biệt thự Thảo Điền. Khách hài lòng, đang thương lượng giá.',
  },
  {
    date: '2025-05-09',
    client: 'Phan Thị Ngọc',
    broker: 'Nguyễn Minh Tuấn',
    type: 'Email',
    note: 'Gửi danh sách nhà phố quận 7. Chờ phản hồi.',
  },
];

export const TYPE_COLOR: Record<string, string> = {
  'Gọi điện': 'border-sky-200 bg-sky-50 text-sky-700',
  'Zalo/Chat': 'border-emerald-200 bg-emerald-50 text-emerald-700',
  'Xem nhà': 'border-violet-200 bg-violet-50 text-violet-700',
  Email: 'border-amber-200 bg-amber-50 text-amber-700',
};

export const TYPE_ICON: Record<string, typeof Phone> = {
  'Gọi điện': Phone,
  'Zalo/Chat': MessageCircle,
  'Xem nhà': Home,
  Email: Mail,
};

export const TYPE_DOT: Record<string, string> = {
  'Gọi điện': 'from-sky-500 to-blue-700',
  'Zalo/Chat': 'from-emerald-500 to-teal-700',
  'Xem nhà': 'from-violet-500 to-purple-700',
  Email: 'from-amber-400 to-orange-500',
};
