/* ******** GET ******** */
/* ******** POST ******** */
/* ******** Updata ******** */
/* ******** Delete ******** */
export const API_URL = {
  BASE_URL: process.env.BASE_URL,
  AUTH: {
    /* ******** POST ******** */
    /**
     * @description 회원가입
     */
    SIGN_UP: `auth/signup`,
    /**
     * @description 로그인
     */
    LOG_IN: `auth/login`,
    /**
     * @description 사용자 정보 가져오기
     */
    GET_PROFILE: 'users/profile',
    /**
     * @description 로그아웃
     */
    LOGOUT: `auth/logout`,
  },
  PRODUCTS: {
    /* ******** GET ******** */
    GET_DETAIL: (id: string) => `products/${id}`,
    GET_LIST: `products`,
    /* ******** POST ******** */
    CREATE: `products`,
    /* ******** Updata ******** */
    PATCH: (id: string) => `products/${id}`,
    /* ******** Delete ******** */
    DELETE: (id: string) => `products/${id}`,
  },
  CATEGORIES: {
    /* ******** GET ******** */
    GET_DETAIL: (id: string) => `categories/${id}`,
    GET_LIST: `categories`,
    /* ******** POST ******** */
    CREATE: `categories`,
    /* ******** Updata ******** */
    PATCH: (id: string) => `categories/${id}`,
    /* ******** Delete ******** */
    DELETE: (id: string) => `categories/${id}`,
  },
} as const;
