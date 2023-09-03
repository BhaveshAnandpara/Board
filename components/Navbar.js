import DashboardIcon from '../public/icons/dashboard_icon.svg'
import TransactionIcon from '../public/icons/transaction_icon.svg'
import ScheduleIcon from '../public/icons/schedule_icon.svg'
import UserIcon from '../public/icons/user_icon.svg'
import SettingIcon from '../public/icons/setting_icon.svg'
import Image from 'next/image'

export default function Navbar() {
    return (
        <>
            <div className="nav blue-section w-fit py-[5vh] px-[50px] rounded-[20px]  flex justify-between items-start flex-col ">

                <div>

                    <span className=" font-primary text-[36px] font-bold text-[#fff] " >Board</span>

                    {/* //NavItems */}
                    <div className="navItems flex justify-center items-start flex-col gap-[3vh] mt-[5vh]">

                        <div className="item flex justify-center items-center gap-[20px]">

                            <Image src={DashboardIcon} width={18} height={18} />
                            <p className=' font-primary text-[16px] text-[#fff] font-bold' >Dashboard</p>

                        </div>

                        <div className="item flex justify-center items-center gap-[20px]">

                            <Image src={TransactionIcon} width={18} height={18} />
                            <p className=' font-primary text-[16px] text-[#fff]' >Transactions</p>

                        </div>
                        
                        <div className="item flex justify-center items-center gap-[20px]">

                            <Image src={ScheduleIcon} width={18} height={18} />
                            <p className=' font-primary text-[16px] text-[#fff]' >Schedules</p>

                        </div>
                        <div className="item flex justify-center items-center gap-[20px]">

                            <Image src={UserIcon} width={18} height={18} />
                            <p className=' font-primary text-[16px] text-[#fff]' >Users</p>

                        </div>
                        <div className="item flex justify-center items-center gap-[20px]">

                            <Image src={SettingIcon} width={18} height={18} />
                            <p className=' font-primary text-[16px] text-[#fff]' >Settings</p>

                        </div>
                    </div>

                </div>

                <div className="nav-footer text-[#fff]  font-primary text-[14px] flex justify-center items-start flex-col gap-[20px] relative bottom-0">

                    <p>Help </p>
                    <p>Contact Us </p>

                </div>

            </div>
        </>
    )
}
