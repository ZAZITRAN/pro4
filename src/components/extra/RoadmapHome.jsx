import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RoadmapHome() {
  return (
    <div>
      <div style={{ marginTop: '80px' }}>
        <div style={{ marginBottom: '10px' }}>
          <h4>Lộ trình phổ biến</h4>
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div>
            <Card className='dvRoadmap' style={{ width: '600px', height: '120px', display: 'flex', flexDirection: 'row', margin: '25px 0px' }}>
              <Card.Img variant="top" src="../img/ảnh 1.jpg" style={{ width: '145px', height: '100px', margin: '10px 10px', borderRadius: '6px' }} />
              <Card.Body>
                <Card.Title>Web Fullstack Java V2.0</Card.Title>
                <Card.Text>
                  Chương trình đào tạo Lập trình Web Full-stack dành cho những ai ...
                </Card.Text>
              </Card.Body>
              <Button variant="primary" style={{ width: '120px', height: '100px', margin: '10px 10px', padding: '10px' }}>
                <Card.Title>05</Card.Title>
                <Card.Text>
                  Khóa học
                </Card.Text>
              </Button>
            </Card>
            <Card className='dvRoadmap' style={{ width: '600px', height: '120px', display: 'flex', flexDirection: 'row', margin: '25px 0px' }}>
              <Card.Img variant="top" src="../img/ảnh 1.jpg" style={{ width: '145px', height: '100px', margin: '10px 10px', borderRadius: '6px' }} />
              <Card.Body>
                <Card.Title>Web Fullstack Java V2.0</Card.Title>
                <Card.Text>
                  Chương trình đào tạo Lập trình Web Full-stack dành cho những ai ...
                </Card.Text>
              </Card.Body>
              <Button variant="primary" style={{ width: '120px', height: '100px', margin: '10px 10px', padding: '10px' }}>
                <Card.Title>05</Card.Title>
                <Card.Text>
                  Khóa học
                </Card.Text>
              </Button>
            </Card>
            <Card className='dvRoadmap' style={{ width: '600px', height: '120px', display: 'flex', flexDirection: 'row', margin: '25px 0px' }}>
              <Card.Img variant="top" src="../img/ảnh 1.jpg" style={{ width: '145px', height: '100px', margin: '10px 10px', borderRadius: '6px' }} />
              <Card.Body>
                <Card.Title>Web Fullstack Java V2.0</Card.Title>
                <Card.Text>
                  Chương trình đào tạo Lập trình Web Full-stack dành cho những ai ...
                </Card.Text>
              </Card.Body>
              <Button variant="primary" style={{ width: '120px', height: '100px', margin: '10px 10px', padding: '10px' }}>
                <Card.Title>05</Card.Title>
                <Card.Text>
                  Khóa học
                </Card.Text>
              </Button>
            </Card>
          </div>
          <div>
            <Card className='dvRoadmap' style={{ width: '600px', height: '120px', display: 'flex', flexDirection: 'row', margin: '25px 0px' }}>
              <Card.Img variant="top" src="../img/ảnh 1.jpg" style={{ width: '145px', height: '100px', margin: '10px 10px', borderRadius: '6px' }} />
              <Card.Body>
                <Card.Title>Web Fullstack Java V2.0</Card.Title>
                <Card.Text>
                  Chương trình đào tạo Lập trình Web Full-stack dành cho những ai ...
                </Card.Text>
              </Card.Body>
              <Button variant="primary" style={{ width: '120px', height: '100px', margin: '10px 10px', padding: '10px' }}>
                <Card.Title>05</Card.Title>
                <Card.Text>
                  Khóa học
                </Card.Text>
              </Button>
            </Card>
            <Card className='dvRoadmap' style={{ width: '600px', height: '120px', display: 'flex', flexDirection: 'row', margin: '25px 0px' }}>
              <Card.Img variant="top" src="../img/ảnh 1.jpg" style={{ width: '145px', height: '100px', margin: '10px 10px', borderRadius: '6px' }} />
              <Card.Body>
                <Card.Title>Web Fullstack Java V2.0</Card.Title>
                <Card.Text>
                  Chương trình đào tạo Lập trình Web Full-stack dành cho những ai ...
                </Card.Text>
              </Card.Body>
              <Button variant="primary" style={{ width: '120px', height: '100px', margin: '10px 10px', padding: '10px' }}>
                <Card.Title>05</Card.Title>
                <Card.Text>
                  Khóa học
                </Card.Text>
              </Button>
            </Card>
            <Card className='dvRoadmap' style={{ width: '600px', height: '120px', display: 'flex', flexDirection: 'row', margin: '25px 0px' }}>
              <Card.Img variant="top" src="../img/ảnh 1.jpg" style={{ width: '145px', height: '100px', margin: '10px 10px', borderRadius: '6px' }} />
              <Card.Body>
                <Card.Title>Web Fullstack Java V2.0</Card.Title>
                <Card.Text>
                  Chương trình đào tạo Lập trình Web Full-stack dành cho những ai ...
                </Card.Text>
              </Card.Body>
              <Button variant="primary" style={{ width: '120px', height: '100px', margin: '10px 10px', padding: '10px' }}>
                <Card.Title>05</Card.Title>
                <Card.Text>
                  Khóa học
                </Card.Text>
              </Button>
            </Card>
          </div>
        </div>
        <div className='allRoad'>
          <Link to={'/roadmap-list'}><p>Xem tất cả</p></Link>
        </div>
      </div>
    </div>
  );
}

export default RoadmapHome;