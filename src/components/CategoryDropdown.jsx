import { Button, Dropdown, Space } from 'antd';
import getCategoryIcons from '../modules/categoryIcons';

const CategoryDropdown = ({ onChange, categories, categoryId }) => {
  const items = categories.map((category) => {
    return {
      label: category.name,
      key: String(category.order),
      icon: getCategoryIcons(category.code, {}),
      code: category.code,
      id: category.id,
    };
  });
  
  const handleMenuClick = (e) => {
    const selectedItem = items.find((value) => value.key === e.key);
    onChange('category_id', selectedItem.id);
  };
  
  const createMenuProps = () => {
    return { items, onClick: handleMenuClick };
  };
  
  const selectedItem = categoryId
  ? items.find((item) => item.id === categoryId)
  : items.find((item) => item.code === 'none');
  
  return (
    <Dropdown menu={createMenuProps()}>
      <Button>
        {selectedItem.icon}
        <Space>{selectedItem.label}</Space>
      </Button>
    </Dropdown>
  );
};

export default CategoryDropdown;
