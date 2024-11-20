import { Input, Select, Button } from "antd";

const { TextArea } = Input;

const Form = () => {
    return (
        <div
            style={{
                margin: "auto",
                padding: "20px",
                boxSizing: "border-box",
                width: "100%",
                maxWidth: "80%", // Default for mobile
            }}
        >
            <style>
                {`
                $@media (min-width: 768px) {
                    div.form-container {
                        max-width: 60%;
                    }
                }
                `}
            </style>
            <div
                className="form-container"
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                }}
            >
                <h4 style={{ color: "#555", marginBottom: "5px" }}>Contact Us</h4>
                <h1 style={{ fontSize: "28px", margin: "10px 0" }}>
                    Make an Appointment
                </h1>
            </div>

            {/* Responsive Form */}
            <div
                className="form-container"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: "10px",
                    marginBottom: "15px",
                }}
            >
                <Input
                    placeholder="Full Name"
                    style={{
                        flex: "1 1 45%",
                        minWidth: "200px",
                        padding: "10px",
                        backgroundColor: '#E6E6E6'
                    }}
                />
                <Input
                    placeholder="Email"
                    style={{
                        flex: "1 1 45%",
                        minWidth: "200px",
                        padding: "10px",
                        backgroundColor: '#E6E6E6'
                    }}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: "10px",
                    marginBottom: "15px",
                }}
            >
                <Select
                    defaultValue="Please Select"
                    style={{
                        flex: "1 1 45%",
                        minWidth: "200px",
                        backgroundColor: "#BDBDBD",
                    }}
                    dropdownStyle={{
                        backgroundColor: "#BDBDBD", // Background color for dropdown
                    }}
                    options={[
                        {
                            value: "jack",
                            label: "Jack",
                        },
                        {
                            value: "lucy",
                            label: "Lucy",
                        },
                        {
                            value: "Yiminghe",
                            label: "Yiminghe",
                        },
                        {
                            value: "disabled",
                            label: "Disabled",
                            disabled: true,
                        },
                    ]}
                />

                <Select
                    defaultValue="4:00 Available"
                    style={{
                        flex: "1 1 45%",
                        minWidth: "200px",
                        backgroundColor: '#E6E6E6'
                    }}
                    options={[
                        {
                            value: "jack",
                            label: "Jack",
                        },
                        {
                            value: "lucy",
                            label: "Lucy",
                        },
                        {
                            value: "Yiminghe",
                            label: "Yiminghe",
                        },
                        {
                            value: "disabled",
                            label: "Disabled",
                            disabled: true,
                        },
                    ]}
                />
            </div>

            <div
                style={{
                    marginBottom: "15px",
                }}
            >
                <TextArea
                    rows={4}
                    placeholder="Write your message"
                    maxLength={200}
                    style={{
                        width: "100%",
                        padding: "10px",
                        resize: "none",
                        backgroundColor: '#E6E6E6'
                    }}
                />
            </div>

            <div style={{ textAlign: "center" }}>
                <Button
                    type="primary"
                    style={{
                        width: "100%",
                        maxWidth: "200px",
                        padding: "1.4rem 0.5rem",
                        fontSize: "16px",
                        backgroundColor: '#23A6F0'
                    }}
                >
                    Book Appointment
                </Button>
            </div>
        </div>
    );
};

export default Form;
