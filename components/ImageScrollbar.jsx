import { useContext } from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
            // <Row className="justifyContent-center d-flex align-items-center me-1">
                <Col 
                    onClick={() => scrollPrev()}
                    // className=""
                    className=" fs-3 justifyContent-center d-flex align-items-center me-1"
                    style={{cursor: "pointer"}}
                >
                    <FaArrowAltCircleLeft />                
                </Col>
            // </Row>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        // <Container>
            // <Row className="justifyContent-center d-flex align-items-center me-1">
                <Col 
                    onClick={() => scrollNext()}
                    className="fs-4 justifyContent-center d-flex align-items-center me-1"
                    style={{cursor: "pointer"}}
                >
                    <FaArrowAltCircleRight />                
                </Col>
            // </Row>
        // </Container>
    )
}

export default function ImageSrollbar({ data }) {
    return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: "hidden"}} >
        {data.map((item, key ) => (
            <Row className="p-1 overflow-hidden" key={key} style={{width: '910px'}} itemId={item.id}>
               <Image 
                placeholder="blur" 
                blurDataURL={item.url} 
                src={item.url} width={1000} 
                height={500}  
                sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
            </Row>
        ))}
    </ScrollMenu>
    );
}


// export default ImageScrollbar;