# Cloudflare Pages 배포 안내

이 프로젝트는 npm 스크립트로 빌드되는 정적 프론트엔드 사이트입니다. 소스는 루트의 `index.html`, `styles.css`, `script.js`, `assets/`에 있고, `npm run build`를 실행하면 Cloudflare Pages가 배포할 `dist/` 폴더가 생성됩니다.

## 로컬 실행

```bash
npm run dev
```

기본 주소는 아래와 같습니다.

```text
http://127.0.0.1:4173/
```

## 빌드

```bash
npm run build
```

빌드 결과는 `dist/`에 생성됩니다.

## Cloudflare Pages Git 배포 설정

GitHub 저장소를 Cloudflare Pages에 연결할 때 아래 값으로 설정하세요.

```text
Project name: making-ricecake-bear
Production branch: main
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: 비워두기
Environment variables: 없음
```

## 방법 1. Dashboard에서 직접 업로드

1. Cloudflare Dashboard에 로그인합니다.
2. `Workers & Pages`로 이동합니다.
3. `Create application` 또는 `Create`를 누릅니다.
4. `Pages`의 `Upload assets` / `Direct Upload` 방식을 선택합니다.
5. 프로젝트 이름을 예: `making-ricecake-bear`로 지정합니다.
6. `npm run build`로 생성된 `dist/` 폴더를 업로드합니다.

업로드가 끝나면 보통 아래 형태의 주소가 생깁니다.

```text
https://making-ricecake-bear.pages.dev
```

## 방법 2. Wrangler CLI로 배포

Cloudflare 로그인을 먼저 진행합니다.

```bash
npx --yes wrangler login
```

그 다음 프로젝트 루트에서 배포합니다.

```bash
npm run deploy
```

비대화형 환경에서는 Cloudflare API 토큰이 필요합니다. 토큰은 채팅이나 문서에 저장하지 말고, 실행하는 터미널 세션에서만 환경변수로 지정하세요.

```bash
CLOUDFLARE_API_TOKEN="여기에_토큰" npm run deploy
```
