import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from './Footer'
import '../../styles/licensing.css'



const Licensing = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    return (
    <>
        <div className={isDarkMode ? "dark-mode-app" : "light-mode-app"}>
         <Header className="header" isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        <div className="licensing">
            <h1>Licensing</h1>
            <p>FitBody is an open-source project licensed under the MIT License. This page outlines the terms of the license and provides details on how you can use, modify, and distribute our software.</p>
            
            <h2>MIT License</h2>
            <p>The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT). Below is the full text of the MIT License:</p>
            
            <pre>
{`MIT License

Copyright (c) 2024 FitBody

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </pre>
            
            <h2>Usage</h2>
            <p>You are free to use our software in your own projects, whether they are commercial or non-commercial. You can modify the code to suit your needs, distribute it to others, and even sell products based on our software, as long as you include the original copyright notice and this permission notice in any substantial portions of the software.</p>
            
            <h2>Contributions</h2>
            <p>We welcome contributions from the community! If you have improvements or fixes, feel free to submit a pull request on our GitHub repository. By contributing, you agree that your contributions will be licensed under the MIT License as well.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about this License, please contact us at: Email: support@fitbody.com</p>
        </div>
        </div>
        <Footer />
    </>
    );
};

export default Licensing;
