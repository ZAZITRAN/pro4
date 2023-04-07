import React from 'react'
import Card from 'react-bootstrap/Card';


export default function Posts() {
  return (
    <div style={{ marginTop: '0' }}>
      {/* <div>
        <div>
          <h4>Bài viết mới nhất</h4>
        </div>
        <div style={{ margin: '0px 5px' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../img/card 1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div> */}
      <div style={{ marginTop: '60px' }}>
        <div className='about1' >
          <div style={{ padding: '0px 15px' }}>
            <img src="../img/home-banner-philosophy.bd9398f0.png" alt="" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0px 15px' }}>
            <h4>
              Sứ mệnh “để nông dân biết code”
            </h4>
            <p>
              Khởi đầu bằng khát vọng, với mục đích hình thành học viện đào tạo công nghệ chất lượng và hiệu quả, Công ty Cổ phần Rikkeisoft cho ra đời đứa con tinh thần Rikkei Academy mang trong mình sứ mệnh cao cả – sứ mệnh “Để nông dân biết code”. Đây là kim chỉ nam để Rikkei Academy theo đuổi trọn đời.
            </p>
            <p>
              Phương pháp đào tạo độc quyền cùng đội ngũ giảng viên chất lượng, chương trình học bám sát nhu cầu thực tế đã giúp RA tự tin đặt ra tầm nhìn đào tạo hơn 10.000 kỹ sư Nhật Bản đến năm 2025 và tiếp tục bứt phá mạnh mẽ để trở thành đại học Công nghệ chất lượng số 1.
            </p>
          </div>
        </div>
        <div className='about2' >
          <div  className='about21' >
            <h4>
              Triết lý đào tạo khác biệt
            </h4>
            <p>
              Đến với R.A học viên sẽ được đào tạo theo triết lý 4T độc quyền (Tin cậy – Thực tiễn – Tinh gọn – Tận tâm)
            </p>
            <p>
              Tin cậy: R.A cam kết là học viện đào tạo đáng tin cậy, uy tín đối với học viên.
            </p>
            <p>
              Thực tiễn: Không ngừng học hỏi, cập nhật công nghệ và kiến thức mới để đưa ra chương trình học thực tiễn, bám sát nhu cầu thị trường để đào tạo học viên.
            </p>
            <p>
              Tinh gọn: Chương trình đào tạo được thiết kế tinh gọn, đầy đủ kiến thức và phù hợp với trình độ của từng học viên để đảm bảo chất lượng, kết quả đầu ra.
            </p>
            <p>
              Tận tâm: Giảng viên, trợ giảng luôn tận tâm để hỗ trợ, chia sẻ, kết nối với học viên qua những câu chuyện nghề, hỗ trợ liên tục và mang đến kỹ thuật đặt câu hỏi nâng cao tư duy phản biện của học viên, giúp học viên thấy hứng thú và có động lực để theo đuổi nghề.
            </p>
          </div>
          <div>
            <img src="../img/home-banner-mission.c798ba70.png" alt="" />
          </div>
          <div  className='about22' >
            <h4>
              Triết lý đào tạo khác biệt
            </h4>
            <p>
              Đến với R.A học viên sẽ được đào tạo theo triết lý 4T độc quyền (Tin cậy – Thực tiễn – Tinh gọn – Tận tâm)
            </p>
            <p>
              Tin cậy: R.A cam kết là học viện đào tạo đáng tin cậy, uy tín đối với học viên.
            </p>
            <p>
              Thực tiễn: Không ngừng học hỏi, cập nhật công nghệ và kiến thức mới để đưa ra chương trình học thực tiễn, bám sát nhu cầu thị trường để đào tạo học viên.
            </p>
            <p>
              Tinh gọn: Chương trình đào tạo được thiết kế tinh gọn, đầy đủ kiến thức và phù hợp với trình độ của từng học viên để đảm bảo chất lượng, kết quả đầu ra.
            </p>
            <p>
              Tận tâm: Giảng viên, trợ giảng luôn tận tâm để hỗ trợ, chia sẻ, kết nối với học viên qua những câu chuyện nghề, hỗ trợ liên tục và mang đến kỹ thuật đặt câu hỏi nâng cao tư duy phản biện của học viên, giúp học viên thấy hứng thú và có động lực để theo đuổi nghề.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
