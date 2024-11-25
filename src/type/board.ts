export interface MenuItem {
  menuId: number;
  menuName: string;
  cateogory: string;
  desc: string;
  createdAt: number;
}

export interface CompanyItem {
  companyId: number;
  companyName: string;
  departmentCnt: number;
  createdAt: number;
  modifiedAt: number;
}

export interface MemberItem {
  memberId: number;
  memberName: string;
  email: string;
  company: string;
  department: string;
  status: string;
  role: string;
}

export interface VMItem {
  rNum: number;
  vmId: number;
  vmName: string;
  subName: string;
  tenantId: number;
  ipv4Addr: string;
  prjId: number;
  prjName: string;
  macAddr: string;
}

export type BoardItem = MenuItem | CompanyItem | MemberItem | VMItem;

export type ColumnHeader<T extends BoardItem> = Partial<
  Record<keyof T, { label: string; width: string; type?: 'date' }>
>;
