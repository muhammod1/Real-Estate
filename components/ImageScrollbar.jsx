import { useContext } from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Container>
            <Row className="justifyContent-center d-flex align-items-center me-1">
                <Col 
                    onClick={() => scrollPrev()}
                    className="fs-4"
                    style={{cursor: "pointer"}}
                >
                    <FaArrowAltCircleLeft />                
                </Col>
            </Row>
        </Container>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Container>
            <Row className="justifyContent-center d-flex align-items-center me-1">
                <Col 
                    onClick={() => scrollNext()}
                    className="fs-4"
                    style={{cursor: "pointer"}}
                >
                    <FaArrowAltCircleLeft />                
                </Col>
            </Row>
        </Container>
    )
}

export default function ImageSrollbar({ data }) {
    return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: "hidden"}} >
        {data.map((item) => (
            <Row className="p-1 overflow-hidden" style={{width: '910px'}} itemId={item.id}>
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


//   export default function ImageSrollbar({ data }) {
//     return (
//       <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
//         {data.map((item) => (
//           <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
//             <Image 
//                 placeholder="blur" 
//                 blurDataURL={item.url} 
//                 src={item.url} width={1000} 
//                 height={500}  
//                 sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
//           </Box>
//         ))}
//       </ScrollMenu>
//     );
//   }

  // const LeftArrow = () => {
//     const { scrollPrev } = useContext(VisibilityContext);
  
//     return (
//       <Flex justifyContent='center' alignItems='center' marginRight='1'>
//         <Icon
//           as={FaArrowAltCircleLeft}
//           onClick={() => scrollPrev()}
//           fontSize='2xl'
//           cursor='pointer'
//           d={['none','none','none','block']}
//         />
//       </Flex>
//     );
//   }
  
//   const RightArrow = () => {
//     const { scrollNext } = useContext(VisibilityContext);
  
//     return (
//       <Flex justifyContent='center' alignItems='center' marginLeft='1'>
//         <Icon
//           as={FaArrowAltCircleRight}
//           onClick={() => scrollNext()}
//           fontSize='2xl'
//           cursor='pointer'
//           d={['none','none','none','block']}
//       />
//       </Flex>
//     );
//   }