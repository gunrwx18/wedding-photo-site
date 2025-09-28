# 💕 결혼식 추억 공유 사이트

Google Photos API를 활용한 결혼식 사진/영상 업로드 웹사이트입니다.

## 🚀 설치 및 설정

### 1. 파일 준비
```bash
# config.example.js를 config.js로 복사
cp config.example.js config.js
```

### 2. Google Cloud Console 설정

#### API 활성화
- [Google Cloud Console](https://console.cloud.google.com/) 접속
- 새 프로젝트 생성
- **Photos Library API** 활성화

#### OAuth 2.0 클라이언트 ID 생성
1. **APIs & Services** → **Credentials**
2. **OAuth consent screen** 설정 (External 선택)
3. **+ CREATE CREDENTIALS** → **OAuth 2.0 Client IDs**
4. **Application type**: Web application
5. **Authorized JavaScript origins** 추가:
   ```
   http://localhost:8080
   http://localhost:3000
   https://your-domain.com
   ```

#### API 키 생성
1. **+ CREATE CREDENTIALS** → **API key**
2. **API restrictions** → **Photos Library API** 선택

### 3. config.js 파일 수정
```javascript
const CONFIG = {
    GOOGLE_CLIENT_ID: 'your-actual-client-id-here',
    GOOGLE_API_KEY: 'your-actual-api-key-here',
    // ... 기타 설정
};
```

## 🔧 로컬 실행

### Python 서버
```bash
python -m http.server 8080
```

### Node.js 서버
```bash
npx serve .
```

브라우저에서 `http://localhost:8080` 접속

## 📁 파일 구조

```
wedding/
├── index.html          # 메인 HTML 파일
├── config.js           # API 설정 (실제 키 포함, .gitignore에 추가됨)
├── config.example.js   # 설정 템플릿 파일
├── .gitignore          # Git 무시 파일 목록
└── README.md           # 이 파일
```

## 🔒 보안 주의사항

1. **config.js 파일은 절대 공개 저장소에 업로드하지 마세요**
2. API 키에 도메인 제한을 설정하세요
3. 실제 배포시 HTTPS를 사용하세요

## ✨ 주요 기능

- Google Photos OAuth 2.0 인증
- 드래그 앤 드롭 파일 업로드
- 실시간 업로드 진행률 표시
- 자동 결혼식 앨범 생성
- 모바일 반응형 디자인
- 파일 크기 및 형식 검증

## 🎯 배포 옵션

### Netlify
1. GitHub에 코드 업로드 (config.js 제외)
2. Netlify에서 환경변수로 API 키 설정
3. 빌드 스크립트에서 config.js 동적 생성

### Vercel
1. GitHub에 코드 업로드
2. 환경변수 설정
3. 빌드시 config.js 생성

## 🆘 문제 해결

### "설정 오류" 메시지가 나타나는 경우
1. `config.js` 파일이 존재하는지 확인
2. API 키가 올바르게 설정되었는지 확인
3. 브라우저 개발자 도구에서 콘솔 오류 확인

### 업로드가 실패하는 경우
1. Google Cloud Console에서 API 할당량 확인
2. 파일 크기 제한 (50MB) 확인
3. 네트워크 연결 상태 확인

## 📞 지원

문제가 발생하면 다음을 확인해주세요:
- 브라우저 개발자 도구 콘솔
- Google Cloud Console API 사용량
- 네트워크 연결 상태
