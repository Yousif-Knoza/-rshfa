import React from 'react';

export const BrewGuideSteps: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'اختر المحصول',
      description: 'تعرّف على المنشأ وملاحظات النكهة ودرجة التحميص التي تناسب ذوقك اليومي.',
    },
    {
      step: '02',
      title: 'حدد طريقة التحضير',
      description: 'اختر نوع الطحن المناسب لأداتك، سواء كانت V60 أو إسبريسو أو حبوباً كاملة.',
    },
    {
      step: '03',
      title: 'أضف إلى سلتك',
      description: 'راجع وزن العبوة والكمية المطلوبة، ثم استكمل طلبك بكل بساطة وسلاسة.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#E7E3DE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl text-right mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D9503D] mb-2 block">
            دليل الشراء البسيط
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#080808] tracking-tight leading-tight mb-3">
            كيف تختار قهوتك؟
          </h2>
          <p className="text-sm sm:text-base text-[#716C67] leading-relaxed">
            ثلاث خطوات ميسرة للوصول إلى النكهة التي تبحث عنها بكل ثقة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative text-right">
          {steps.map((item) => (
            <div key={item.step} className="relative flex flex-col justify-between">
              <div className="mb-4 flex items-center justify-between border-b border-[#E7E3DE] pb-4">
                <span className="text-4xl sm:text-5xl font-bold text-[#080808] font-mono tracking-tight">
                  {item.step}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#D9503D]"></span>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#080808] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#716C67] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
