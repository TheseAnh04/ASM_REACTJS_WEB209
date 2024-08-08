import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div>
         <div className="bg-gradient-to-br from-[#F8F4F0] to-[#d8f3dc] p-24">
                    <div className="w-[888.22px] h-[246.70px] relative mx-auto p-6">
                <div className="w-[377.47px] h-[96.18px] left-0 top-0 absolute">
                    <div className="left-[0.22px] top-0 absolute text-[#505f4e] text-[40px] font-normal font-['Baloo'] leading-[46px] tracking-tight">Etwas abonnieren*</div>
                    <div className="left-[51.47px] top-[50.18px] absolute text-[#505f4e] text-[40px] font-normal font-['Baloo'] leading-[46px] tracking-tight">_Unser Newsletter</div>
                    <div className="w-[23.39px] h-[25.73px] left-[341.22px] top-0 absolute">
                    </div>
                    <div className="w-[237.07px] left-[51.47px] top-[149.22px] absolute text-[#555555] text-sm font-normal font-['Poppins'] leading-snug tracking-tight">
                    Get weekly update about our product on your email, no spam guaranteed we promise ✌️
                </div>
                </div>
                <div className="relative w-[508.45px] h-[62.39px] left-[379.77px] top-[157.02px] absolute bg-white shadow">
                    <input
                        type="email"
                        placeholder="youremail123@gmail.com"
                        className="w-full h-full px-10 py-2 text-[#57646c] text-sm font-normal font-['Poppins'] outline-none"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6c767c] text-xl font-semibold font-['Nunito Sans']">
                        ✉️
                    </div>
                </div>
                <div className="w-[160.64px] h-[55.37px] left-[750.58px] top-[215.33px] absolute bg-[#656c66]">
                    <button
                        className="w-full h-full bg-[#656c66] text-white text-xs font-semibold font-['Poppins'] tracking-widest outline-none"
                    >
                        ABONNIEREN
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact