# Cloudflare Pages 배포 안내

이 프로젝트는 빌드가 필요 없는 정적 사이트입니다. `index.html`, `styles.css`, `script.js`, `assets/`만 Cloudflare Pages에 올리면 됩니다.

## 방법 1. Dashboard에서 직접 업로드

1. Cloudflare Dashboard에 로그인합니다.
2. `Workers & Pages`로 이동합니다.
3. `Create application` 또는 `Create`를 누릅니다.
4. `Pages`의 `Upload assets` / `Direct Upload` 방식을 선택합니다.
5. 프로젝트 이름을 예: `tteok-gomdori`로 지정합니다.
6. 이 폴더의 업로드용 ZIP 파일을 올립니다.

업로드가 끝나면 보통 아래 형태의 주소가 생깁니다.

```text
https://tteok-gomdori.pages.dev
```

## 방법 2. Wrangler CLI로 배포

Cloudflare 로그인을 먼저 진행합니다.

```bash
npx --yes wrangler login
```

그 다음 프로젝트 루트에서 배포합니다.

```bash
npx --yes wrangler pages deploy . --project-name tteok-gomdori --branch main
```

비대화형 환경에서는 Cloudflare API 토큰이 필요합니다. 토큰은 채팅이나 문서에 저장하지 말고, 실행하는 터미널 세션에서만 환경변수로 지정하세요.

```bash
CLOUDFLARE_API_TOKEN="여기에_토큰" npx --yes wrangler pages deploy . --project-name tteok-gomdori --branch main
```
