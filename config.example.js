// Google Photos API 설정 템플릿
// 이 파일을 config.js로 복사하고 실제 값으로 변경하세요

const CONFIG = {
    // Google OAuth 2.0 클라이언트 ID
    // Google Cloud Console > APIs & Services > Credentials에서 생성
    GOOGLE_CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE',
    
    // Google API 키
    // Google Cloud Console > APIs & Services > Credentials에서 생성
    GOOGLE_API_KEY: 'YOUR_GOOGLE_API_KEY_HERE',
    
    // Google Photos API 설정 (변경하지 마세요)
    DISCOVERY_DOC: 'https://photoslibrary.googleapis.com/$discovery/rest?version=v1',
    SCOPES: 'https://www.googleapis.com/auth/photoslibrary https://www.googleapis.com/auth/photoslibrary.sharing',
    
    // 앱 설정 (필요에 따라 수정 가능)
    ALBUM_NAME: '💕 우리의 결혼식 추억 💕',
    MAX_FILE_SIZE: 50 * 1024 * 1024, // 50MB
    SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    SUPPORTED_VIDEO_TYPES: ['video/mp4', 'video/mov', 'video/avi', 'video/quicktime']
};

// CONFIG 객체를 전역으로 사용할 수 있도록 export
window.CONFIG = CONFIG;
