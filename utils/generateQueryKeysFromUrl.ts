export const generateQueryKeysFromUrl = (URL: string) => {
  // 문자열에서 "?"을 기준으로 나눕니다.
  const [resource, queryString] = URL.split('?');

  // "/"를 기준으로 resource를 나눕니다.
  const segments = resource.split('/');

  // queryString이 존재하면 "&"로 나눠서 객체로 파싱합니다.
  const queryParams = queryString
    ? queryString.split('&').reduce(
        (acc, param) => {
          const [key, value] = param.split('=');
          acc[key] = value;
          return acc;
        },
        {} as Record<string, string | undefined>
      )
    : {};

  // 최종적으로 "/"와 "&"으로 나뉜 부분과 "&"로 나뉜 쿼리 매개변수를 합칩니다.
  const keys = [...segments, queryParams];

  return keys;
};
