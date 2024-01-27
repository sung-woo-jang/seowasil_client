import classes from './styles.module.scss';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Badge from '../Badge';

export default function MobileBottomNavigation() {
  return (
    <div className={classes.mobileBottomNavigationWrapper}>
      {/* 클릭 시 메뉴 관련 창 띄우기 */}
      <button>
        <MenuOutlinedIcon />
      </button>

      <button>
        <ShoppingCartOutlinedIcon />
        <Badge count={0} />
      </button>

      <button>
        <HomeOutlinedIcon />
      </button>

      <button>
        <FavoriteBorderOutlinedIcon />
        <Badge count={0} />
      </button>

      {/* 클릭 시 카테고리 관련 창 띄우기 */}
      <button>
        <GridViewOutlinedIcon />
      </button>
    </div>
  );
}
