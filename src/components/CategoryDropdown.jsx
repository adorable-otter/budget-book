import { useQuery } from '@tanstack/react-query';
import { Button, Dropdown, Space } from 'antd';
import { useState } from 'react';
import { fetchExpenditureCategories } from '../apis/expenditures';
import getCategoryIcons from '../modules/categoryIcons';

const CategoryDropdown = () => {
  const [selectedMenu, setSelectedMenu] = useState({
    label: '미분류',
    key: '0',
    icon: getCategoryIcons('none', {}),
    code: 'none',
  });

  const { data: categories, isPending } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchExpenditureCategories,
  });

  if (isPending) return null;

  const items = categories?.map((category) => {
    return {
      label: category.name,
      key: String(category.order),
      icon: getCategoryIcons(category.code, {}),
      code: category.code,
    };
  });

  const handleMenuClick = (e) => {
    setSelectedMenu(items.find((value) => value.key === e.key));
  };

  const createMenuProps = () => {
    return { items, onClick: handleMenuClick };
  };

  return (
    <Dropdown menu={createMenuProps()}>
      <Button>
        {selectedMenu.icon}
        <Space>{selectedMenu.label}</Space>
      </Button>
    </Dropdown>
  );
};

export default CategoryDropdown;
