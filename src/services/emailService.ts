/// <reference types="vite/client" />

interface EmailData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

interface EmailRequest {
  from: string
  to: string
  subject: string
  html: string
}

export const sendContactEmail = async (formData: EmailData): Promise<boolean> => {
  try {
    // .env.local 파일에서 환경변수 가져오기 (Vite가 자동으로 로드)
    const emailHost = import.meta.env.VITE_EMAIL_HOST || 'smtp.naver.com'
    const emailPort = import.meta.env.VITE_EMAIL_PORT || '587'
    const emailSecure = import.meta.env.VITE_EMAIL_SECURE || 'false'
    const emailUser = import.meta.env.VITE_EMAIL_USER || '13three@naver.com'
    const emailPassword = import.meta.env.VITE_EMAIL_PASSWORD || '7DHSKV8FN69P'
    const emailFrom = import.meta.env.VITE_EMAIL_FROM || '13three@naver.com'
    const emailTo = import.meta.env.VITE_EMAIL_TO || '13three@naver.com'
    const apiUrl = import.meta.env.VITE_EMAIL_API_URL || 'https://fxhub.azurewebsites.net/api/fxhub/sendEmailHeaders'

    // 환경변수 로드 확인 (개발 시에만)
    if (import.meta.env.DEV) {
    //   console.log('=== 환경변수 로드 확인 ===')
    //   console.log('EMAIL_HOST:', emailHost)
    //   console.log('EMAIL_USER:', emailUser)
    //   console.log('API_URL:', apiUrl)
    //   console.log('========================')
    }

    // 서비스 타입 한글 변환
    const serviceTypeMap: { [key: string]: string } = {
      'model': '모델 에이전시',
      'event': '행사 기획',
      'marketing': '마케팅 컨설팅',
      'other': '기타'
    }

    // 이메일 제목과 내용 구성
    const subject = `[TEDDY 문의] ${formData.name}님의 ${serviceTypeMap[formData.service] || '서비스'} 문의`
    
    // 모던한 HTML 이메일 템플릿 생성
    const html = `
<!DOCTYPE html>
<html lang="ko" style="margin: 0; padding: 0;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEDDY 문의</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a1a; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 2px; box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06); overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #2C3E50 0%, #34495E 100%); padding: 40px 24px; text-align: center;">
            <h1 style="font-size: 32px; font-weight: 800; color: #ffffff; margin: 0; letter-spacing: -0.02em;">TEDDY Agency</h1>
            <p style="font-size: 18px; color: rgba(255, 255, 255, 0.85); margin-top: 8px;">새로운 문의가 도착했습니다</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 24px;">
            <!-- 문의자 정보 - 간단하게 표현 -->
            <div style="margin-bottom: 32px;">
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
                    <div style="padding: 16px; background: #F7F9FC; border-radius: 2px; border-left: 2px solid #2C3E50;">
                        <strong style="display: block; color: #2C3E50; margin-bottom: 4px;">이름</strong>
                        ${formData.name}
                    </div>
                    <div style="padding: 16px; background: #F7F9FC; border-radius: 2px; border-left: 2px solid #2C3E50;">
                        <strong style="display: block; color: #2C3E50; margin-bottom: 4px;">이메일</strong>
                        ${formData.email}
                    </div>
                    <div style="padding: 16px; background: #F7F9FC; border-radius: 2px; border-left: 2px solid #2C3E50;">
                        <strong style="display: block; color: #2C3E50; margin-bottom: 4px;">연락처</strong>
                        ${formData.phone || '미입력'}
                    </div>
                    <div style="padding: 16px; background: #F7F9FC; border-radius: 2px; border-left: 2px solid #2C3E50;">
                        <strong style="display: block; color: #2C3E50; margin-bottom: 4px;">서비스</strong>
                        ${serviceTypeMap[formData.service] || '미선택'}
                    </div>
                </div>
            </div>
            
            <!-- 문의 내용 -->
            <div style="background: #F7F9FC; padding: 24px; border-radius: 2px; border-left: 2px solid #2C3E50; margin-top: 24px;">
                <h2 style="font-size: 20px; color: #2C3E50; margin: 0 0 16px 0;">문의 내용</h2>
                <div style="color: #2C3E50; white-space: pre-wrap; line-height: 1.8;">${formData.message}</div>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #F7F9FC; padding: 24px; text-align: center; border-top: 1px solid #E5E9F2;">
            <p style="color: #5D6D7E; font-size: 14px; margin: 0;">
                접수 시간: ${new Date().toLocaleString('ko-KR')}
            </p>
            <p style="color: #2C3E50; font-size: 14px; margin: 12px 0 0 0;">
                © TEDDY Agency
            </p>
        </div>
    </div>
</body>
</html>
    `.trim()

    // API 요청 데이터
    const requestData: EmailRequest = {
      from: emailFrom,
      to: emailTo,
      subject: subject,
      html: html
    }

    // 콘솔에 요청 데이터 출력 (HTML은 길어서 제외)
    // console.log('=== 이메일 전송 요청 ===')
    // console.log('API URL:', apiUrl)
    // console.log('요청 데이터 (HTML 제외):', {
    //   from: requestData.from,
    //   to: requestData.to,
    //   subject: requestData.subject,
    //   html: '[HTML 템플릿 - 길이: ' + requestData.html.length + '자]'
    // })
    // console.log('========================')

    // fetch API로 이메일 전송 요청
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'x-email-host': emailHost,
        'x-email-port': emailPort,
        'x-email-secure': emailSecure,
        'x-email-user': emailUser,
        'x-email-password': emailPassword,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })

    if (response.ok) {
      console.log('이메일 전송 성공!')
      return true
    } else {
      throw new Error(`이메일 전송 실패: ${response.status} ${response.statusText}`)
    }
  } catch (error) {
    console.error('이메일 전송 오류:', error)
    throw error
  }
}
