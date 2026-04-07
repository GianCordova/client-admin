import { useState } from "react";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isForgot, setIsForgot] = useState(false);

    return(
        
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg 
        border border-gray-200 p-6 md: p-10">
        
            {/* Logo */}
            <div className="flex justify-center mb-6">
                    <img
                    src="/src/assets/img/kinal_sports.png"
                    alt="Kinal Sport"
                    className="h-20 w-auto"
                    />
                </div>

                <div className=" text-center mb-6">

                    <h1 className="text-2xl lg:text-3xl font-bold
                    text-gray-900 mb-2">

                    {isForgot
                    ? "Recuperar Contraseña"
                    :isLogin
                    
                    }
                    
                    </h1>

                </div>

        </div>

    );
};

export { AuthPage };