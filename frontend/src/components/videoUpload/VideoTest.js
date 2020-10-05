import React, {useEffect, useRef, useState} from 'react';
import ReactPlayer from 'react-player'
import Duration from './Duration'
import {MDBBtn, MDBInput, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from 'mdbreact'
import {SideBar} from "../../commons";
import {Link} from 'react-router-dom'
import "../../assets/css/calendar.css";
import axios from "axios";
import FittedImage from "react-fitted-image";

const VideoTest = () => {
    const [accountInfo, setAccountInfo] = useState(JSON.parse(localStorage.estiDate));
    const [state, setState] = useState("")
    const [url, setUrl] = useState(null)
    const [controls, setControls] = useState(false)
    const [light, setLight] = useState(false)
    const [volume, setVolume] = useState(0.8)
    const [muted, setMuted] = useState(false)
    const [duration, setDuration] = useState(0)
    const [playbackRate, setPlaybackRate] = useState(1.0)
    const [loop, setLoop] = useState(false)
    const [pip, setPip] = useState(false)
    const [playing, setPlaying] = useState(true)
    const [seeking, setSeeking] = useState(false)
    const [player, setPlayer] = useState("")
    const [movingDetail, setMovingDetail] = useState('')
    const [movingName, setMovingName] = useState('')
    const [movingWriter, setMovingWriter] = useState('')
    const [movingPhone, setMovingPhone] = useState('');
    const [movingFrom, setMovingFrom] = useState('');
    const [movingTo, setMovingTo] = useState('');
    const [movingPrice, setMovingPrice] = useState(0.0)
    const [optionalAddrFrom, setOptionalAddrFrom] = useState('')
    const [optionalAddrTo, setOptionalAddrTo] = useState('')
    const [movingType, setMovingType] = useState('')
    const [square, setSquare] = useState('')
    const [userId, setUserId] = useState(JSON.parse(sessionStorage.userData).userId);
    const [data, setData] = useState([]);
    const [pbRain, setPbRain] = useState([])
    const [movingDate, setMovingDate] = useState('')
    const [orderId, setOrderId] = useState('')
    const [imageList, setImageList] = useState([]);
    const [imageUrl, setImageUrl] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        console.log("INFO :" +localStorage.estiDate);
        if (accountInfo) {
            setMovingName(accountInfo.movingName);
            setMovingPhone(accountInfo.movingPhone);
            setMovingFrom(accountInfo.movingFrom);
            setOptionalAddrFrom(accountInfo.optionalAddr);
            setMovingWriter(accountInfo.movingWriter);
            setMovingDetail(accountInfo.movingDetail);
            setMovingTo(accountInfo.movingTo);
            setSquare(accountInfo.square);
            setMovingType(accountInfo.movingType);
            setOptionalAddrFrom(accountInfo.optionalAddrFrom);
            setOptionalAddrTo(accountInfo.optionalAddrTo);
            setMovingDate(accountInfo.movingDate);
            setOrderId(accountInfo.orderId);
            setMovingPrice(accountInfo.movingPrice);
            calTotalPrice( accountInfo.movingDate, accountInfo.movingPrice)
        }
    }, [accountInfo])
    const ref = player => {setPlayer(player)}
    const playerref = useRef(ref)
    const handleProgress = state => {
        if (!seeking) {
            setState(state)
        }
    }
    const goodDays = [
        {
            year: 2020,
            month: 8,
            day: 18,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 8,
            day: 27,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 8,
            day: 28,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 9,
            day: 6,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 9,
            day: 7,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 9,
            day: 16,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 9,
            day: 25,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 9,
            day: 26,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 9,
            day: 30,
            className: 'holiDay'
        },
        {
            year: 2020,
            month: 10,
            day: 1,
            className: 'holiDay'
        },
        {
            year: 2020,
            month: 10,
            day: 2,
            className: 'holiDay'
        },
        {
            year: 2020,
            month: 10,
            day: 3,
            className: 'holiDay'
        },
        {
            year: 2020,
            month: 10,
            day: 5,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 10,
            day: 6,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 10,
            day: 9,
            className: 'holiDay'
        },
        {
            year: 2020,
            month: 10,
            day: 15,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 10,
            day: 16,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 10,
            day: 25,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 10,
            day: 26,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 11,
            day: 4,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 11,
            day: 5,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 11,
            day: 9,
            className: 'saleDay'
        },
        {
            year: 2020,
            month: 11,
            day: 10,
            className: 'saleDay'
        },
        {
            year: 2020,
            month: 11,
            day: 11,
            className: 'saleDay'
        },
        {
            year: 2020,
            month: 11,
            day: 12,
            className: 'saleDay'
        },
        {
            year: 2020,
            month: 11,
            day: 13,
            className: 'saleDay'
        },
        {
            year: 2020,
            month: 11,
            day: 16,
            className: 'saleDay'
        },
        {
            year: 2020,
            month: 11,
            day: 17,
            className: 'saleDay'
        },
        {
            year: 2020,
            month: 11,
            day: 18,
            className: 'saleDay'
        },
        {
            year: 2020,
            month: 11,
            day: 19,
            className: 'saleDay'
        },
        {
            year: 2020,
            month: 11,
            day: 20,
            className: 'saleDay'
        },
        {
            year: 2020,
            month: 11,
            day: 14,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 11,
            day: 23,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 11,
            day: 24,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 12,
            day: 3,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 12,
            day: 4,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 12,
            day: 13,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 12,
            day: 14,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 12,
            day: 23,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 12,
            day: 24,
            className: 'handDay'
        },
        {
            year: 2020,
            month: 12,
            day: 25,
            className: 'holiDay'
        },
    ];
    useEffect(() => {
        axios
            .get(`http://3.35.107.231:8080/statistics/pbRain`)
            .then(res => {
                const pBRainDate = [];
                res.data.pbRain.forEach(one => {
                    let obj = {};
                    if (one.rainProb <= 30) {
                        obj.year = 2020;
                        obj.month = Number(one.precipitationDate.split('-')[0]);
                        obj.day = Number(one.precipitationDate.split('-')[1]);
                        obj.className = 'pbRain20';
                        pBRainDate.push(obj);
                    } else if (one.rainProb <= 50) {
                        obj.year = 2020;
                        obj.month = Number(one.precipitationDate.split('-')[0]);
                        obj.day = Number(one.precipitationDate.split('-')[1]);
                        obj.className = 'pbRain40';
                        pBRainDate.push(obj);
                    } else if (one.rainProb <= 70) {
                        obj.year = 2020;
                        obj.month = Number(one.precipitationDate.split('-')[0]);
                        obj.day = Number(one.precipitationDate.split('-')[1]);
                        obj.className = 'pbRain60';
                        pBRainDate.push(obj);
                    }
                });
                setData(pBRainDate);
                setPbRain(res.data.pbRain);
            })
            .catch(error => {
                throw error;
            });
        setData(goodDays);
    }, []);

    useEffect(() => {
        axios
            .get(`http://3.35.107.231:8080/file/getfilename/${JSON.parse(localStorage.getItem("estiDate")).orderId}`)
            .then(({data}) => {
                setImageList(data);
                setImageUrl(JSON.parse(sessionStorage.getItem("url")))

            })
            .catch(error => {
                throw error;
            });
    }, []);

    const calTotalPrice = (movingDate, movingPrice) => {
        console.log(movingDate === "2020-9-16" ? "2020-09-16" : "false");
        console.log("돈  :" +movingPrice);
        if (movingDate === "2020-9-16"){
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-9-25"){
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-9-26") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-10-05"){
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-10-06") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-10-15"){
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-10-16") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-10-25"){
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-10-26") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-11-04"){
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-11-05") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-11-14"){
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-11-23") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-11-24") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-12-03") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-12-04") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-12-13") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-12-14") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-12-23") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-12-24") {
            setTotalPrice(movingPrice * 1.35);
        }else if(movingDate === "2020-11-09"){
            setTotalPrice(movingPrice * 0.8);
        }else if(movingDate === "2020-11-10"){
            setTotalPrice(movingPrice * 0.8);
        }else if(movingDate === "2020-11-11"){
            setTotalPrice(movingPrice * 0.8);
        }else if(movingDate === "2020-11-12"){
            setTotalPrice(movingPrice * 0.8);
        }else if(movingDate === "2020-11-13"){
            setTotalPrice(movingPrice * 0.8);
        }else if(movingDate === "2020-11-16"){
            setTotalPrice(movingPrice * 0.8);
        }else if(movingDate === "2020-11-17"){
            setTotalPrice(movingPrice * 0.8);
        }else if(movingDate === "2020-11-18"){
            setTotalPrice(movingPrice * 0.8);
        }else if(movingDate === "2020-11-19"){
            setTotalPrice(movingPrice * 0.8);
        }else if(movingDate === "2020-11-20"){
            setTotalPrice(movingPrice * 0.8);
        }else if(movingDate === "2020-9-12"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-9-13"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-9-19"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-9-20"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-9-27"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-9-30"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-10-01"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-10-02"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-10-03"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-10-04"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-10-09"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-10-10"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-10-11"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-10-17"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-10-18"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-10-24"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-10-31"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-11-01"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-11-07"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-11-08"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-11-15"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-11-21"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-11-22"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-11-28"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-11-29"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-12-05"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-12-06"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-12-12"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-12-19"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-12-20"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-12-25"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-12-26"){
            setTotalPrice(movingPrice * 1.15);
        }else if(movingDate === "2020-12-27"){
            setTotalPrice(movingPrice * 1.15);

        }else {
            setTotalPrice(movingPrice);
        }
    }
    return (
        <div>
            <SideBar/>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-12"><br/>
                            <h2 className="page-header">{userId}님의 견적서 작성 내역</h2><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <MDBCol style={{maxWidth: "100rem"}}>
                                    <MDBCard>
                                        <ReactPlayer ref={playerref}
                                                     className='react-player'
                                                     width='900px'
                                                     height={'500px'}
                                                     url={"https://youtu.be/NgHu-hnW8KQ"}
                                                     pip={pip}
                                                     playing={playing}
                                                     controls={controls}
                                                     light={light}
                                                     loop={loop}
                                                     playbackRate={playbackRate}
                                                     volume={volume}
                                                     muted={muted}
                                                     onPlay={() => {
                                                         setPlaying(playing)
                                                     }}
                                                     onEnablePIP={() => setPip(true)}
                                                     onDisablePIP={() => setPip(!pip)}
                                                     onPause={() => setPlaying(false)}
                                                     onEnded={() => setPlaying(loop)}
                                                     onProgress={handleProgress}
                                                     onDuration={(duration) => setDuration(duration)}/>
                                        <MDBCardBody>
                                            <MDBCardTitle>영상정보</MDBCardTitle>
                                            <MDBCardText>
                                                <tbody>
                                                <tr>
                                                    <th>영상이</th>
                                                    <td>{playing ? '나오고 있습니다.' : '멈췄습니다.'}</td>
                                                </tr>
                                                <tr>
                                                    <th>볼륨크기</th>
                                                    <td>{volume.toFixed(3)}</td>
                                                </tr>
                                                <tr>
                                                    <th>영상길이</th>
                                                    <td><Duration seconds={duration}/></td>
                                                </tr>
                                                </tbody>
                                            </MDBCardText>
                                            <tr>
                                                <th>재생 버튼</th>
                                                <td>
                                                    <MDBBtn
                                                        onClick={() => {
                                                            setPlaying(!playing)
                                                        }}>{playing ? '일시정지' : '재생시작'}</MDBBtn>
                                                    {light &&
                                                    <MDBBtn onClick={() => player.showPreview()}>Show preview</MDBBtn>}
                                                    {ReactPlayer.canEnablePIP(url) &&
                                                    <MDBBtn
                                                        onClick={() => {
                                                            setPip(!pip)
                                                        }}>{pip ? 'Disable PiP' : 'Enable PiP'}</MDBBtn>}
                                                </td>
                                            </tr>
                                            <h1>올린사진</h1>
                                            <FittedImage fit="contain" src={imageUrl} alt="#"/>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <form method="post">
                                    <div className="form-group">
                                        <MDBInput
                                            label='작성자'
                                            type="text" className="form-control"
                                            id="exampleFormControlInput1" name="crea_id"
                                            value={movingName}
                                        />
                                    </div>
                                    <MDBInput
                                        label='연락처'
                                        group
                                        type='text'
                                        validate
                                        value={movingPhone}
                                    />
                                    <MDBInput
                                        label='아이디'
                                        group
                                        type='text'
                                        validate
                                        value={userId}
                                    />
                                    <MDBInput
                                        label='출발지 정보'
                                        group
                                        type='text'
                                        validate
                                        value={movingFrom}
                                    />
                                    <MDBInput
                                        label='상세 주소'
                                        group
                                        type='text'
                                        validate
                                        value={optionalAddrFrom}
                                    />
                                    <MDBInput
                                        label='도착지 주소'
                                        group
                                        type='text'
                                        validate
                                        value={movingTo}
                                    />
                                    <MDBInput
                                        label='상세 주소'
                                        group
                                        type='text'
                                        validate
                                        value={optionalAddrTo}
                                    />
                                    <MDBInput
                                        label='이사유형'
                                        group
                                        type='text'
                                        validate
                                        value={movingType}
                                    />
                                    <MDBInput
                                        label='평수'
                                        group
                                        type='text'
                                        validate
                                        value={square}
                                    />
                                    <MDBInput
                                        label='제목'
                                        group
                                        type='text'
                                        validate
                                        value={movingWriter}
                                    />
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">내용</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                                  name="contents" rows={10} value={movingDetail}
                                                  onChange={e => setMovingDetail(e.target.value)}>
                                         </textarea>
                                    </div>
                                    <section className="card-body">
                                        <h2>확정 이사 날짜</h2>
                                        <h2> {movingDate}</h2>
                                        <br/>
                                        <h2 style={{
                                            color: 'red',
                                            fontWeight: 'bold'
                                        }}> 결제 금액 : {totalPrice.toFixed(1)} 만원</h2>
                                    </section>
                                    <Link to={"/videocommunity"}> <MDBBtn type="button"
                                                                          className="btn btn-secondary">확인</MDBBtn></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoTest;