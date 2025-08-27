import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '```json
[
  {
    "title": "Voice-Driven API Builder",
    "description": "أداة تسمح للمستخدمين بإنشاء واجهات برمجة التطبيقات (APIs) باستخدام الأوامر الصوتية، مما يسهل على المطورين إنشاء خدماتهم بسرعة.",
    "mvp_plan": "استخدام مكتبة تحويل الصوت إلى نص لإنشاء واجهة بسيطة. تطوير نموذج أولي يمكنه التعرف على الأوامر الأساسية لإنشاء نقاط النهاية، ثم اختبارها مع مجموعة صغيرة من المطورين."
  },
  {
    "title": "Voice-Activated Code Review Assistant",
    "description": "مساعد يقوم بمراجعة الكود المكتوب من خلال الأوامر الصوتية، ويقدم ملاحظات فورية حول الأخطاء والممارسات الجيدة.",
    "mvp_plan": "تطوير نموذج أولي يدمج بين تحويل الصوت إلى نص ونموذج ذكاء اصطناعي لتحليل الكود. يمكن استخدام مكتبة مفتوحة المصدر لمراجعة الكود وتقديم الملاحظات. اختبار الأداة مع مجموعة من المطورين للحصول على تعليقات سريعة."
  },
  {
    "title": "Voice-Based Learning Platform for Coding",
    "description": "منصة تعليمية تفاعلية تسمح للمستخدمين بتعلم البرمجة من خلال الأوامر الصوتية، مما يجعل التعلم أكثر سهولة وتفاعلية.",
    "mvp_plan": "إنشاء واجهة بسيطة تتيح للمستخدمين اختيار لغات البرمجة والدروس باستخدام الأوامر الصوتية. استخدام محتوى تعليمي مفتوح المصدر وتطوير نظام أساسي يمكنه تقديم الدروس والتفاعل مع المستخدمين. اختبار المنصة مع مجموعة من الطلاب."
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}