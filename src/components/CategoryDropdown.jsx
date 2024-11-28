import { useQuery } from '@tanstack/react-query';
import { Button, Dropdown, Space } from 'antd';
import { useState } from 'react';
import { fetchExpenditureCategories } from '../apis/expenditures';
import getCategoryIcons from '../modules/categoryIcons';

const CategoryDropdown = () => {
  const [selectedMenu, setSelectedMenu] = useState({
    label: '미분류',
    icon: getCategoryIcons('none', {}),
  });

  const { data: categories } = useQuery({
    queryKey: ['expenditureCategories'],
    queryFn: fetchExpenditureCategories,
    enabled: false,
  });

  const handleMenuClick = (e) => {
    setSelectedMenu(items.find((value) => value.key === e.key));
  };

  const items = categories?.map((category) => {
    return {
      label: category.name,
      key: category.order,
      icon: getCategoryIcons(category.code, {}),
      code: category.code,
    };
  });

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps}>
      <Button>
        {selectedMenu.icon}
        <Space>{selectedMenu.label}</Space>
      </Button>
    </Dropdown>
  );
};

export default CategoryDropdown;
