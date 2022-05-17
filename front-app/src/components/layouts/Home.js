import OwlCarousel from 'react-owl-carousel';

const Home = () =>{
    return(
        <>
        <div className="hero-area">
        </div>
        <div className="choice-area pb-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="choice-header text-center">
                        <h2>Why Choose HASAN'S Exam Prep?</h2>
                    </div>
                </div>
                    <div className="choice-body-area">
                    <div className="justify-between">
                    <div className="row">
                        <div class="col-md-4 text-center">
                            <img src="https://grdp.co/cdn-cgi/image/quality=100,width=200,f=auto/https://gs-post-images.grdp.co/2021/8/group-6-2x-img1629283053211-98.png-rs-high-webp.png" class="w4-2-l h4-l w3 h2-5 mb3 " alt="Online Classroom Program"/>
                            <p className="f6">Online Classroom Program</p>
                            <p className="f5">by Top Faculty</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src="https://grdp.co/cdn-cgi/image/quality=100,width=200,f=auto/https://gs-post-images.grdp.co/2021/8/illustrations-live-courses-2x-img1629272458441-51.png-rs-high-webp.png" class="w4-2-l h4-l w3 h2-5 mb3 mh2 mh4-l" alt="Comprehensive Study Material"/>
                            <p className="f6">Comprehensive Study Material</p>
                            <p className="f5">for All Exams</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src="https://grdp.co/cdn-cgi/image/quality=100,width=200,f=auto/https://gs-post-images.grdp.co/2021/8/group-19-woman-mask-2-2x-img1629283123665-66.png-rs-high-webp.png" class="w4-2-l h4-l w3 h2-5 mb3 " alt="Latest Pattern Test Series"/>
                            <p className="f6">Latest Pattern Test Series</p>
                            <p className="f5">with Detailed Analysis</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="exam-category-area pb-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="exam-category-header text-center">
                        <h2>Select Your Exam</h2>
                    </div>
                </div>
                <div className="exam-body-area">
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <div className="category-card">
                                <span><img src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-groups-images.grdp.co/grpimg1467094801126-40.png"></img></span>
                                <a href="#"><span>SSC Exam</span></a>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="category-card">
                                <span><img src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-groups-images.grdp.co/grpimg1467094801126-40.png"></img></span>
                                <a href="#"><span>SSC Exam</span></a>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="category-card">
                                <span><img src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-groups-images.grdp.co/grpimg1467094801126-40.png"></img></span>
                                <a href="#"><span>SSC Exam</span></a>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="category-card">
                                <span><img src="https://grdp.co/cdn-cgi/image/width=48,height=48,quality=80,fit=cover,f=auto/https://gs-groups-images.grdp.co/grpimg1467094801126-40.png"></img></span>
                                <a href="#"><span>SSC Exam</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="students-review-area pb-5 pt-5">
            <div className='container'>
                <div className="row">
                    <div className="students-review-header text-center">
                        <h2>Students Speak</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='students-review-body'>
                        <OwlCarousel
                                items={3} 
                                nav={true}
                                loop={true} margin={20} 
                                dots={false} autoplay={true}
                                smartSpeed={600} 
                                responsive={
                                    {
                                        0 : {
                                            items: 1,
                                        },
                                        576:{
                                            items: 2
                                        },
                                        768 : {
                                                items: 2,
                                                margin: 30,
                                            },
                                        992 : {
                                            items: 3,
                                            margin: 30,
                                        },
                                        1200 : {
                                            items: 3,
                                            margin: 30,
                                        }
                                    }
                                }
                                className="section__interview owl-theme" id="flixtv" 
                            >
                            <div className='student-card text-center'>
                                <span className='img'><img src="https://gs-post-images.grdp.co/2022/3/bb63b37d8a461762f02e29ea0de58cc9c9ae58391b07b0bb142b9c608742f5ad-high.jpg"/></span>
                                <br/><span>Abhinav Jain</span>
                                <p>I have been using HASAN'S Exam Prep (Formerly Gradeup) since 2018. It's a very good platform for job aspirants. To be honest, in cgl tier 2 many similar quant questions came from gradeup's speed test. It was very helpful.</p>
                            </div>
                            <div className='student-card text-center'>
                                <span className='img'><img src="https://gs-post-images.grdp.co/2022/3/bb63b37d8a461762f02e29ea0de58cc9c9ae58391b07b0bb142b9c608742f5ad-high.jpg"/></span>
                                <br/><span>Abhinav Jain</span>
                                <p>I have been using HASAN'S Exam Prep (Formerly Gradeup) since 2018. It's a very good platform for job aspirants. To be honest, in cgl tier 2 many similar quant questions came from gradeup's speed test. It was very helpful.</p>
                            </div>
                            <div className='student-card text-center'>
                                <span className='img'><img src="https://gs-post-images.grdp.co/2022/3/bb63b37d8a461762f02e29ea0de58cc9c9ae58391b07b0bb142b9c608742f5ad-high.jpg"/></span>
                                <br/><span>Abhinav Jain</span>
                                <p>I have been using HASAN'S Exam Prep (Formerly Gradeup) since 2018. It's a very good platform for job aspirants. To be honest, in cgl tier 2 many similar quant questions came from gradeup's speed test. It was very helpful.</p>
                            </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Home;