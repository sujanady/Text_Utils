import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'Dark',
        backgroundColor: 'White'
    })

    const [btnText, setBtnText] = useState("Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === 'Black') {
            setMyStyle({
                color: 'White',
                backgroundColor: 'Black'
            })
            setBtnText("Light Mode");
        }

        else {
            setMyStyle({
                color: 'Black',
                backgroundColor: 'White'
            })
            setBtnText("Dark Mode");
        }
    }

    return (
        <div className="continer" style={myStyle}>
            <h2 className='my-3'>About us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Simplify Your Text Processing</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Welcome to the Text Utils App, where simplicity meets efficiency. Our app is designed to streamline your text processing tasks, making complex operations as easy as a few clicks. Whether you need to remove duplicates, convert case, or extract specific information, Text Utils has got you covered. Say goodbye to manual labor and hello to a smarter way of handling your text needs.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Tailored for Productivity</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Text Utils App is your go-to tool for boosting productivity. With a user-friendly interface and a wide range of text manipulation options, you'll save valuable time on repetitive tasks. Whether you're a student, professional, or content creator, our app adapts to your needs, making text transformation quick and hassle-free. From word count analysis to finding and replacing text, Text Utils empowers you to focus on what truly matters.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Secure and Reliable</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            At Text Utils, your data security is our top priority. Our app operates locally on your device, ensuring that your sensitive text remains private and secure. We've implemented robust encryption measures to guarantee that your information stays safe during every operation. With a commitment to reliability and data protection, Text Utils App is your trustworthy companion for all things text-related.
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}