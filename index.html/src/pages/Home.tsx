import React, { useState, useEffect, useRef } from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
} from "recharts";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    
    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file)
            return;

        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

        if (!allowedTypes.includes(file.type)) {
            alert("请上传.jpg、.jpeg或.png格式的图片");
            return;
        }

        const reader = new FileReader();

        reader.onload = event => {
            setAvatarPreview(event.target?.result as string);
        };

        reader.readAsDataURL(file);
    };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const priceComparisonData = [{
        name: "本房源",
        current: 25000,
        trend: 5000,
        comparison: 3000
    }, {
        name: "小区均价",
        current: 26275,
        trend: 5000,
        comparison: 3500
    }, {
        name: "周边房源",
        current: 28305,
        trend: 6000,
        comparison: 4200
    }];

    const priceTrendData = [{
        month: "2024.09",
        price: 36451
    }, {
        month: "2024.11",
        price: 35820
    }, {
        month: "2025.01",
        price: 34750
    }, {
        month: "2025.03",
        price: 33200
    }, {
        month: "2025.05",
        price: 32150
    }, {
        month: "2025.07",
        price: 31800
    }, {
        month: "2025.09",
        price: 31275
    }];

    const handleNavClick = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }

        setMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#f8fafc] text-[#1e293b]">
            {}
            <div className="blob w-96 h-96 top-0 left-0"></div>
            <div className="blob w-80 h-80 bottom-0 right-0"></div>
            {}
             <nav
                className="glassmorphism sticky top-0 z-50 p-4"
                id="mainNav"
                ref={navRef}>
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-xl font-bold text-[#002FA7]">
                        <i className="fas fa-home mr-2"></i>太阳星辰花园天邑
                                  </div>
                    <div className="hidden md:flex space-x-6">
                        <button
                            onClick={() => handleNavClick("overview")}
                            className="text-gray-600 hover:text-[#002FA7] transition-colors">核心概况
                                        </button>
                        <button
                            onClick={() => handleNavClick("features")}
                            className="text-gray-600 hover:text-[#002FA7] transition-colors">核心卖点
                                        </button>
                        <button
                            onClick={() => handleNavClick("spaces")}
                            className="text-gray-600 hover:text-[#002FA7] transition-colors">空间展示
                                        </button>
                        <button
                            onClick={() => handleNavClick("contact")}
                            className="text-gray-600 hover:text-[#002FA7] transition-colors">联系方式
                                        </button>
                    </div>
                    <button
                        className="md:hidden text-gray-600 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="导航菜单">
                        <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                    </button>
                    {}
                    <div className={`mobile-menu md:hidden ${mobileMenuOpen ? "active" : ""}`}>
                        <button
                            onClick={() => handleNavClick("overview")}
                            className="text-gray-600 hover:text-[#002FA7] transition-colors flex items-center w-full text-left">
                            <i className="fas fa-info-circle mr-3 text-[#002FA7]"></i>核心概况
                                        </button>
                        <button
                            onClick={() => handleNavClick("features")}
                            className="text-gray-600 hover:text-[#002FA7] transition-colors flex items-center w-full text-left">
                            <i className="fas fa-star mr-3 text-[#002FA7]"></i>核心卖点
                                        </button>
                        <button
                            onClick={() => handleNavClick("spaces")}
                            className="text-gray-600 hover:text-[#002FA7] transition-colors flex items-center w-full text-left">
                            <i className="fas fa-image mr-3 text-[#002FA7]"></i>空间展示
                                        </button>
                        <button
                            onClick={() => handleNavClick("contact")}
                            className="text-gray-600 hover:text-[#002FA7] transition-colors flex items-center w-full text-left">
                            <i className="fas fa-phone mr-3 text-[#002FA7]"></i>联系方式
                                        </button>
                    </div>
                </div>
            </nav>
            {}
             <header className="absolute top-0 left-0 right-0 mb-8 overflow-hidden z-10">
                {}
                     <div
                        className="relative h-[60vh] min-h-[450px] bg-cover bg-center"
                        style={{
                            backgroundImage: `url('https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20apartment%20building%2C%20clear%20sky%2C%20daytime%2C%20high%20contrast%2C%20bright%20lighting%2C%20professional%20real%20estate%20photography&sign=d55f93ca228b7c3762dbfc58d32ebf51')`
                    }}>
                    {}
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#f8fafc]"></div>
                    {}
                    <div
                        className="container mx-auto px-4 md:px-8 relative h-full flex items-center justify-center">
                        <></>
                        <div className="max-w-4xl mx-auto text-center text-white py-12 relative z-10">
                            <h1
                                className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-xl text-shadow-lg text-white">太阳星辰花园天邑房源分析
                                              </h1>
                            <p
                                className="text-lg md:text-xl mb-8 drop-shadow-xl text-shadow-lg text-white">苏州工业园区东沙湖板块 · 3室2厅1卫 · 95.71㎡</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <div
                                    className="stat-card glassmorphism p-4 text-center w-32 backdrop-blur-md bg-white/90">
                                 <div
                                     className="text-sm"
                                     style={{
                                         color: "#002A9D",
                                         backgroundColor: "transparent"
                                     }}>单价</div>
                                 <div className="text-xl font-bold text-[#002A9D]">30,000元/㎡</div>
                                </div>
    <div className="stat-card glassmorphism p-4 text-center w-32 backdrop-blur-sm">
      <div className="text-sm" style={{ color: "#002A9D", backgroundColor: "transparent" }}>总价</div>
      <div className="text-xl font-bold text-[#002A9D]">288万元</div>
    </div>
    <div className="stat-card glassmorphism p-4 text-center w-32 backdrop-blur-sm">
      <div className="text-sm" style={{ color: "#002A9D", backgroundColor: "transparent" }}>首付</div>
      <div className="text-xl font-bold text-[#002A9D]">约55万元</div>
    </div>
    <div className="stat-card glassmorphism p-4 text-center w-32 backdrop-blur-sm">
      <div className="text-sm" style={{ color: "#002A9D", backgroundColor: "transparent" }}>月供</div>
      <div className="text-xl font-bold text-[#002A9D]">约10,500元</div>
    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {}
             <section id="overview" className="container mx-auto py-12 px-4 md:px-8 pt-[60vh]">
                <div className="glassmorphism p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <div
                            className="w-10 h-10 rounded-full bg-[#002FA7] flex items-center justify-center text-white mr-3">
                            <i className="fas fa-info-circle"></i>
                        </div>房源核心概况
                                  </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-[#002FA7]">基本信息</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">楼盘名称</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">太阳星辰花园天邑</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">地理位置</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">苏州工业园区东沙湖板块</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">户型结构</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">3室2厅1卫</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">建筑面积</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">95.71㎡</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">单价</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">30,000元/㎡</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">总价</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">288万元</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">楼层</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">高楼层（共15层）</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">朝向</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">南向为主，日照约6小时</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">装修情况</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">精装修，翻新价1296元/㎡</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">核心标签</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">近地铁、小高层、学区房</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-[#002FA7]">小区亮点</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">建成年代</span>：2015年（次新小区）</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">绿化率</span>：50%（高于区域平均水平）</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">物业费</span>：1.98元/㎡/月（万科物业，管家式服务）</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">车位配比</span>：1:0.9（地下车位300元/月）</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">人车分流</span>：全人车分流，保障行人安全</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <h4 className="font-semibold text-lg mb-3 text-[#002FA7]">户型图</h4>
                                <img
                                    src="https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/户型图_20250930102722.jpg"
                                    alt="户型图"
                                    className="w-full rounded-lg shadow-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section id="features" className="container mx-auto py-12 px-4 md:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#002FA7]">核心卖点解析</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="glassmorphism p-8 card-hover">
                        <div className="flex items-center mb-4">
                            <div
                                className="w-10 h-10 rounded-full bg-[#002FA7] flex items-center justify-center text-white mr-3">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h3 className="text-xl font-semibold">黄金区位：双地铁覆盖+成熟商圈</h3>
                        </div>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <i className="fas fa-subway text-[#002FA7] mt-1 mr-2"></i>
                                <span><span className="font-medium">地铁</span>：距5号线东沙湖站402米（步行5分钟），1号线钟南街站1.3公里（步行15分钟），直达苏州火车站及园区核心商圈。</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-bus text-[#002FA7] mt-1 mr-2"></i>
                                <span><span className="font-medium">公交</span>：周边150个公交站，111路、128路等直达湖东邻里中心、苏州中心。</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-car text-[#002FA7] mt-1 mr-2"></i>
                                <span><span className="font-medium">自驾</span>：300米直达中环东线，15分钟通达金鸡湖商务区。</span>
                            </li>
                        </ul>
                    </div>
                    <div className="glassmorphism p-8 card-hover">
                        <div className="flex items-center mb-4">
                            <div
                                className="w-10 h-10 rounded-full bg-[#002FA7] flex items-center justify-center text-white mr-3">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3 className="text-xl font-semibold">教育王牌：九年一贯制名校加持</h3>
                        </div>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <i className="fas fa-school text-[#002FA7] mt-1 mr-2"></i>
                                <span><span className="font-medium">幼儿园</span>：祺嘉亿城幼儿园（400米）</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-pencil-alt text-[#002FA7] mt-1 mr-2"></i>
                                <span><span className="font-medium">小学</span>：东沙湖小学（钟南街校区，980米）</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-university text-[#002FA7] mt-1 mr-2"></i>
                                <span><span className="font-medium">中学</span>：东沙湖实验中学（1.2公里）</span>
                            </li>
                            <li className="text-sm text-gray-500 mt-2">均为园区排名前五的公办学校，2025年东沙湖小学星塘街校区扩建完成，教育资源进一步升级。</li>
                        </ul>
                    </div>
                </div>
                <div className="glassmorphism p-8 mb-12">
                    <div className="flex items-center mb-4">
                        <div
                            className="w-10 h-10 rounded-full bg-[#002FA7] flex items-center justify-center text-white mr-3">
                            <i className="fas fa-home"></i>
                        </div>
                        <h3 className="text-xl font-semibold">户型优势：三开间朝南+高得房率</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <i className="fas fa-door-open text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">格局</span>：客厅朝南带阳台（32.8㎡），主卧（18.4㎡）及南向次卧（11.4㎡）均朝南，北向次卧（9.4㎡）可作儿童房或书房。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-ruler-combined text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">得房率</span>：约85%，高于同区域高层住宅平均水平。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-vector-square text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">功能分区</span>：动静分离，厨房（5.1㎡）与卫生间（5.1㎡）干湿分离，适合三口之家。</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img
                                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/客厅_20250930102722.jpg"
                                alt="客厅展示"
                                className="w-full rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section id="spaces" className="container mx-auto py-12 px-4 md:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#002FA7]">空间展示与实拍解析</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="glassmorphism p-8 card-hover">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <i className="fas fa-bed text-[#002FA7] mr-3"></i>南向主卧：阳光满屋+独立卫浴
                                        </h3>
                         <img
                             src="https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/南向主卧_20250930102722.jpg"
                             alt="南向主卧"
                             className="cursor-pointer transition-transform hover:scale-[1.02]"
                             onClick={() => openModal('https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/南向主卧_20250930102722.jpg')}
                            className="w-full rounded-lg shadow-md mb-4" />
                        <p className="text-gray-600">18.4㎡超大空间，带粉色防护栏（适合有幼儿家庭），连接阳台，日照6小时以上。米黄色木质家具搭配浅绿色条纹床单，温馨宜居。</p>
                    </div>
                    <div className="glassmorphism p-8 card-hover">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <i className="fas fa-bed text-[#002FA7] mr-3"></i>南向次卧：明亮通透+灵活空间
                                        </h3>
                         <img
                             src="https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/南向次卧_20250930102722.jpg"
                             alt="南向次卧"
                             className="cursor-pointer transition-transform hover:scale-[1.02]"
                             onClick={() => openModal('https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/南向次卧_20250930102722.jpg')}
                            className="w-full rounded-lg shadow-md mb-4" />
                        <p className="text-gray-600">11.4㎡空间，白色欧式雕花床架，浅灰色心形图案床单，适合儿童或客房使用。靠近窗户，采光充足，搭配棕色长方形枕头，整体风格简洁温馨。</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="glassmorphism p-8 card-hover">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <i className="fas fa-bed text-[#002FA7] mr-3"></i>北向次卧：多功能书房+储物空间
                                        </h3>
                         <img
                             src="https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/北向次卧_20250930102722.jpg"
                             alt="北向次卧"
                             className="cursor-pointer transition-transform hover:scale-[1.02]"
                             onClick={() => openModal('https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/北向次卧_20250930102722.jpg')}
                            className="w-full rounded-lg shadow-md mb-4" />
                        <p className="text-gray-600">9.4㎡实用空间，蓝色卡通图案床单，搭配三个企鹅毛绒玩具，充满童趣。左侧床头柜放置透明塑料瓶等物品，右侧靠近窗户处有木质书架，兼具学习与储物功能。</p>
                    </div>
                    <div className="glassmorphism p-8 card-hover">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <i className="fas fa-bath text-[#002FA7] mr-3"></i>卫生间：干湿分离+实用设计
                                        </h3>
                         <img
                             src="https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/卫生间_20250930102722.jpg"
                             alt="卫生间"
                             className="cursor-pointer transition-transform hover:scale-[1.02]"
                             onClick={() => openModal('https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/卫生间_20250930102722.jpg')}
                            className="w-full rounded-lg shadow-md mb-4" />
                        <p className="text-gray-600">5.1㎡空间，米黄色与浅棕色相间瓷砖墙面，白色马桶上方设银色置物架，悬挂四条毛巾。洗手台台面整洁，摆放洗漱用品，下方为带抽屉的银色柜体，收纳空间充足。</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glassmorphism p-8 card-hover">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <i className="fas fa-couch text-[#002FA7] mr-3"></i>客厅：32.8㎡阔绰空间+通透采光
                                        </h3>
                         <img
                             src="https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/客厅_20250930102722.jpg"
                             alt="客厅"
                             className="cursor-pointer transition-transform hover:scale-[1.02]"
                             onClick={() => openModal('https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/客厅_20250930102722.jpg')}
                            className="w-full rounded-lg shadow-md mb-4" />
                        <p className="text-gray-600">浅棕色实木地板，L型沙发与电视墙分区合理，适合家庭聚会。长条形吸顶灯+筒灯设计，光线均匀无死角。</p>
                    </div>
                    <div className="glassmorphism p-8 card-hover">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <i className="fas fa-utensils text-[#002FA7] mr-3"></i>厨房：L型操作台+实用收纳
                                        </h3>
                         <img
                             src="https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/厨房_20250930102722.jpg"
                             alt="厨房"
                             className="cursor-pointer transition-transform hover:scale-[1.02]"
                             onClick={() => openModal('https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/厨房_20250930102722.jpg')}
                            className="w-full rounded-lg shadow-md mb-4" />
                        <p className="text-gray-600">彩色菱形瓷砖墙面，双槽不锈钢水槽，台面预留双开门冰箱位置。吊柜与地柜结合，储物空间充足，满足日常烹饪需求。</p>
                    </div>
                </div>
            </section>
            {}
            <section className="container mx-auto py-12 px-4 md:px-8">
                <div className="glassmorphism p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <div
                            className="w-10 h-10 rounded-full bg-[#002FA7] flex items-center justify-center text-white mr-3">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>周边配套全解析
                                  </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-[#002FA7]">商业配套</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">配套名称</th>
                                            <th
                                                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">距离</th>
                                            <th
                                                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">特色</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">东沙湖邻里中心</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">308米</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">生鲜超市、餐饮、影院一站式服务</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">永旺梦乐城</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">1.2公里</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">日系大型购物中心，品牌齐全</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">湖东新街口</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">2公里</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">夜市、特色小吃街</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-[#002FA7]">医疗健康</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-hospital text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">苏州大学附属儿童医院（总院）</span>：2.9公里，三甲专科医院，儿童医疗保障无忧。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-clinic-medical text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">九龙医院</span>：4.5公里，综合性医院，满足日常就医需求。</span>
                                </li>
                            </ul>
                            <h3 className="text-xl font-semibold mt-6 mb-4 text-[#002FA7]">生态休闲</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-tree text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">东沙湖生态公园</span>：800米，占地121万㎡，跑步、野餐、亲子活动胜地。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-leaf text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">白塘植物园</span>：2公里，四季花卉景观，休闲散步首选。</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section className="container mx-auto py-12 px-4 md:px-8">
                <div className="glassmorphism p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <div
                            className="w-10 h-10 rounded-full bg-[#002FA7] flex items-center justify-center text-white mr-3">
                            <i className="fas fa-tag"></i>
                        </div>价格分析与市场对比
                                  </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glassmorphism p-6 rounded-lg min-h-[500px] flex flex-col">
                            <h3 className="text-xl font-semibold mb-6 text-[#002FA7]">价格优势</h3>
                            <ul className="space-y-4 mb-6 text-gray-600">
                                <li className="flex items-start">
                                    <i className="fas fa-tag text-[#002FA7] mt-1 mr-3 text-lg"></i>
                                    <span>单价：30,000元/㎡，低于小区当前均价（31,275元/㎡）及周边同户型房源（31,200-37,411元/㎡），性价比突出。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-calculator text-[#002FA7] mt-1 mr-3 text-lg"></i>
                                    <span>总价：288万，首付55万起，月供约10,500元（按30年基准利率4.25%计算）。</span>
                                </li>
                            </ul>
                            <ResponsiveContainer width="100%" height="75%">
                                <BarChart data={priceComparisonData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tickFormatter={value => `${value.toLocaleString()}元/㎡`} />
                                    <Tooltip
                                        formatter={(value, name) => [`${value.toLocaleString()}元/㎡`, name]}
                                        contentStyle={{
                                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                                            borderRadius: "8px",
                                            border: "none",
                                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                                        }}
                                        stackFormatter={value => `${value.toLocaleString()}元/㎡`} />
                                    <Bar
                                        dataKey="current"
                                        fill="#F8BC3B"
                                        radius={[4, 4, 0, 0]}
                                        barSize={40}
                                        name="Under 5 Years" />
                                    <Bar
                                        dataKey="trend"
                                        fill="#00D9D0"
                                        radius={[4, 4, 0, 0]}
                                        barSize={40}
                                        name="5 to 13 Years" />
                                    <Bar
                                        dataKey="comparison"
                                        fill="#002A9D"
                                        radius={[4, 4, 0, 0]}
                                        barSize={40}
                                        name="14 to 17 Years" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="glassmorphism p-6 rounded-lg min-h-[500px] flex flex-col">
                            <h3 className="text-xl font-semibold mb-6 text-[#002FA7]">市场趋势</h3>
                            <ul className="space-y-4 mb-6 text-gray-600">
                                <li className="flex items-start">
                                    <i className="fas fa-chart-line text-[#002FA7] mt-1 mr-3 text-lg"></i>
                                    <span>小区房价走势：2024年9月-2025年9月，小区均价从36,451元/㎡降至31,275元/㎡，当前处于低位，适合入手。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-map-marker-alt text-[#002FA7] mt-1 mr-3 text-lg"></i>
                                    <span>区域规划：2025年东沙湖基金小镇三期完工，板块价值持续提升，未来升值潜力大。</span>
                                </li>
                            </ul>
                            <ResponsiveContainer width="100%" height="75%">
                                <LineChart data={priceTrendData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tickFormatter={value => `${value.toLocaleString()}元/㎡`} />
                                    <Tooltip
                                        formatter={value => [`${value.toLocaleString()}元/㎡`, "单价"]}
                                        contentStyle={{
                                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                                            borderRadius: "8px",
                                            border: "none",
                                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                                        }} />
                                    <Line
                                        type="monotone"
                                        dataKey="price"
                                        stroke="#002FA7"
                                        strokeWidth={2}
                                        dot={{
                                            r: 4,
                                            fill: "#002FA7"
                                        }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section className="container mx-auto py-12 px-4 md:px-8">
                <div className="glassmorphism p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <div
                            className="w-10 h-10 rounded-full bg-[#002FA7] flex items-center justify-center text-white mr-3">
                            <i className="fas fa-shield-alt"></i>
                        </div>服务保障与交易说明
                                  </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-[#002FA7]">服务承诺</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-user-tie text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">全程守护</span>：经纪人王闹海（18888888888）提供一对一带看、签约、过户全流程服务。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-search text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">房源查验</span>：已通过产权核验，无抵押无查封，交易安全。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-percent text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">费率透明</span>：中介费仅1.5%，低于行业平均水平。</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-[#002FA7]">交易须知</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-file-invoice-dollar text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">税费</span>：满五年唯一住房，免个税，契税1.5%（约4.32万）。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-hand-holding-usd text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">首付</span>：最低55万（首套房30%），支持组合贷款。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-home text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">交房时间</span>：全款支付后15天内，按揭支付后30天内。</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section id="contact" className="container mx-auto py-12 px-4 md:px-8">
                <div className="glassmorphism p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <div
                            className="w-10 h-10 rounded-full bg-[#002FA7] flex items-center justify-center text-white mr-3">
                            <i className="fas fa-phone-alt"></i>
                        </div>为什么选择这套房源？
                                  </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">区位+教育</span>：双地铁+九年一贯制名校，适合自住兼投资。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">价格洼地</span>：单价低于市场价1275元/㎡，总价合理，首付压力小。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">户型稀缺</span>：三开间朝南，高得房率，同小区同户型挂牌量仅6套。</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-[#002FA7] mt-1 mr-2"></i>
                                    <span><span className="font-medium">品质社区</span>：2015年次新小区，50%绿化率，万科物业加持，居住体验佳。</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div
                                className="bg-[#002FA7] text-white p-6 rounded-lg flex flex-col items-center">
                                <h3 className="text-xl font-semibold mb-6 text-center">预约看房</h3>
                                {}
                                <div className="mb-8 relative">
                                    <div className="relative group">
                                        <div
                                            className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border-2 border-white/30 transition-all duration-300 group-hover:border-white/60 mx-auto">
                                            {avatarPreview ? <img src={avatarPreview} alt="头像预览" className="w-full h-full object-cover" /> : <img src="https://lf-code-agent.coze.cn/obj/x-ai-cn/309506712578/attachment/闹海_20250930143949.png" alt="闹海" className="w-full h-full object-contain" />}
                                            <div
                                                className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full">
                                                <i className="fas fa-camera text-white text-xl"></i>
                                            </div>
                                            <label
                                                htmlFor="avatar-upload"
                                                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-white/20 px-3 py-1 rounded-full cursor-pointer hover:bg-white/30 text-[#002FA7]">更换头像
                                                          </label>
                                        </div>
                                        <input
                                            type="file"
                                            id="avatar-upload"
                                            accept=".jpg,.jpeg,.png"
                                            onChange={handleAvatarChange}
                                            className="hidden" />
                                    </div>
                                </div>
                                <p className="mb-4 text-center">王闹海 18888888888（微信同号）</p>
                                <a
                                    href="https://open.realsee.com/ke/WEl2Mm76qa0Dkgmb/yQkazl8xKdYtBhKhVTjBDz5u4LX6Rn9K/?duid=D2WjumjwcdQvXOt4fzyhRGmccqOQR6sWmUXn79RBiTsHYXeb&parentSceneId=1556882536225378817&shareCount=1&shareTicket=b4f7ad1a90ca45be63a5067b788ab5dc&cityId=320500#lianjia&lianjiafrom=wechat"
                                    className="inline-block bg-white text-[#002FA7] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-4"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="fas fa-vr-cardboard mr-2"></i>VR看房
                                                      </a>
                                <p className="mt-2 text-sm text-center">随时恭候品鉴！</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {}
            <footer className="bg-[#002FA7] text-white py-8 mt-12">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm">页面内容均由 AI 生成，仅供参考</p>
                        </div>
                        <div>
                            <p className="text-sm">created by <a href="https://space.coze.cn" className="underline hover:text-gray-300">coze space</a></p>
                     </div>
        </div>
        
         {/* 图片查看模态框 */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeModal}>
            <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <div className="relative inline-block">
                <img 
                  src={selectedImage} 
                  alt="大图预览" 
                  className="max-w-full max-h-[90vh] object-contain"
                />
                <button 
                  className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors z-10"
                  onClick={closeModal}
                >
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        )}
                </div>
            </footer>
        </div>
    );
}