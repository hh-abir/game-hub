import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SkeletonText,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, isLoading, error } = usePlatforms();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platfrom) => (
          <MenuItem key={platfrom.id}>{platfrom.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
