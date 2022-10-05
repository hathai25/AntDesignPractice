import { Menu, Row, Col, Image, Typography } from "antd"

const { Title } = Typography

const Navbar = () => {
    return (
        <Row justify="space-between" align="middle">
            <Col flex span={4}>
                <Row span={24} justify="space-evenly">
                    <Image 
                        height={40}
                        width={40} 
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" 
                    />
                    <Title 
                        style={{
                            margin: "0px",
                            lineHeight: "40px"
                        }}
                        level={3}
                    >
                        Saviour Care
                    </Title>
                </Row>
                
            </Col>
            <Col span={9}>
                <Menu 
                    mode="horizontal" 
                    defaultSelectedKeys="home"
                    style={{
                        fontSize: "18px",
                        padding: "14px 0"
                    }}
                >
                    <Menu.Item key="home">
                        Home
                    </Menu.Item>
                    <Menu.Item key="find">
                        Find a doctor
                    </Menu.Item>
                    <Menu.Item key="app">
                        Apps
                    </Menu.Item>
                    <Menu.Item key="testimonials">
                        Testimonials
                    </Menu.Item>
                    <Menu.Item key="about-us">
                        About us
                    </Menu.Item>
                </Menu>
            </Col>
            
        </Row>
            
    )
}

export default Navbar