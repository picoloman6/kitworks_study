import { CompanyItem, MenuItem } from '@type/board';

export const getMenuItemsApi: () => Promise<MenuItem[]> = () =>
  new Promise((res) => {
    const menuItems: MenuItem[] = Array.from({ length: 10 }, (_, i) => ({
      menuId: i + 1,
      menuName: `${i + 1}번째 메뉴`,
      desc: '설명',
      cateogory: '카테고리',
      createdAt: new Date().getTime() + i * 10000000
    }));
    res(menuItems);
  });

export const getCompanyItemsApi: () => Promise<CompanyItem[]> = () =>
  new Promise((res) => {
    const companyItems: CompanyItem[] = Array.from({ length: 10 }, (_, i) => ({
      companyId: i + 1,
      companyName: `${i + 1}번째 회사`,
      departmentCnt: i + 1,
      createdAt: new Date().getTime() + i * 10000000,
      modifiedAt: new Date().getTime() + i * 10000000
    }));
    res(companyItems);
  });
