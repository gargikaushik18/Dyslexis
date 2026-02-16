import React, { useRef, useState, useEffect } from "react";
import Peer from "peerjs";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
  FaDesktop,
  FaPhoneSlash,
} from "react-icons/fa";
import "../styles/TherapyCall.css";

function TherapyCall() {
  const myVideo = useRef(null);
  const remoteVideo = useRef(null);
  const peerRef = useRef(null);
  const currentCallRef = useRef(null);

  const [stream, setStream] = useState(null);
  const [peerId, setPeerId] = useState("");
  const [remoteId, setRemoteId] = useState("");
  const [micOn, setMicOn] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);
  const [screenSharing, setScreenSharing] = useState(false);

  // 🔹 Initialize Peer ONLY ONCE
  useEffect(() => {
    const peer = new Peer(undefined, {
      host: "localhost",
      port: 9000,
      path: "/myapp",
    });

    peerRef.current = peer;

    peer.on("open", (id) => {
      setPeerId(id);
    });

    peer.on("call", async (call) => {
      const mediaStream = await startMedia();
      call.answer(mediaStream);
      currentCallRef.current = call;

      call.on("stream", (remoteStream) => {
        remoteVideo.current.srcObject = remoteStream;
      });

      call.on("close", cleanUpCall);
    });

    return () => {
      peer.destroy();
    };
  }, []);

  // 🎥 Start Camera + Mic (ONLY CALLED ONCE)
  const startMedia = async () => {
    if (stream) return stream; // 🔥 prevent repeated permission popup

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setStream(mediaStream);
      myVideo.current.srcObject = mediaStream;

      setMicOn(true);
      setCameraOn(true);

      return mediaStream;
    } catch (error) {
      alert("Please allow camera and microphone access.");
      console.error(error);
      return null;
    }
  };

  // 🎤 Toggle Mic
  const toggleMic = async () => {
    const mediaStream = await startMedia();
    if (!mediaStream) return;

    const audioTrack = mediaStream.getAudioTracks()[0];
    if (!audioTrack) return;

    audioTrack.enabled = !audioTrack.enabled;
    setMicOn(audioTrack.enabled);
  };

  // 📷 Toggle Camera
  const toggleCamera = async () => {
    const mediaStream = await startMedia();
    if (!mediaStream) return;

    const videoTrack = mediaStream.getVideoTracks()[0];
    if (!videoTrack) return;

    videoTrack.enabled = !videoTrack.enabled;
    setCameraOn(videoTrack.enabled);
  };

  // 🖥 Screen Share
  const shareScreen = async () => {
    if (!currentCallRef.current) {
      alert("Connect call first");
      return;
    }

    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

      const screenTrack = screenStream.getVideoTracks()[0];

      const sender = currentCallRef.current.peerConnection
        .getSenders()
        .find((s) => s.track.kind === "video");

      if (!sender) return;

      sender.replaceTrack(screenTrack);
      myVideo.current.srcObject = screenStream;
      setScreenSharing(true);

      screenTrack.onended = () => {
        const cameraTrack = stream.getVideoTracks()[0];
        sender.replaceTrack(cameraTrack);
        myVideo.current.srcObject = stream;
        setScreenSharing(false);
      };
    } catch (err) {
      console.log("Screen share cancelled");
    }
  };

  // 🔗 Connect Call
  const connectCall = async () => {
    if (!remoteId) {
      alert("Enter Therapist ID");
      return;
    }

    const mediaStream = await startMedia();
    if (!mediaStream) return;

    const call = peerRef.current.call(remoteId, mediaStream);
    currentCallRef.current = call;

    call.on("stream", (remoteStream) => {
      remoteVideo.current.srcObject = remoteStream;
    });

    call.on("close", cleanUpCall);
  };

  // 🧹 Cleanup
  const cleanUpCall = () => {
    remoteVideo.current.srcObject = null;
    currentCallRef.current = null;
  };

  // ❌ Leave Call
  const leaveCall = () => {
    if (currentCallRef.current) {
      currentCallRef.current.close();
    }

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    myVideo.current.srcObject = null;
    remoteVideo.current.srcObject = null;

    setStream(null);
    setMicOn(false);
    setCameraOn(false);
    setScreenSharing(false);
  };

  return (
    <div className="main-container">
      <div className="left-side">
        <img src="https://media.istockphoto.com/id/1224454909/photo/happy-family-making-video-call-to-doctor.jpg?s=612x612&w=0&k=20&c=imTIddqsD78dZeTm_B9y3P45KPlCuVxXxl8DCq1YOYk=" alt="Dyslexia" />
      </div>
      

      <div className="right-side">
        <h2 className="heading">Connect With Therapist</h2>

        <div className="video-section">
          <div className="video-box">
            <video ref={myVideo} autoPlay muted playsInline />
            <span>You</span>
          </div>

          <div className="video-box">
            <video ref={remoteVideo} autoPlay playsInline />
            <span>Therapist</span>
          </div>
        </div>

        <div className="connection-controls">
          <p>Your ID: <strong>{peerId}</strong></p>

          <input
            type="text"
            placeholder="Enter Therapist ID"
            value={remoteId}
            onChange={(e) => setRemoteId(e.target.value)}
          />

          <button onClick={connectCall}>Connect</button>
        </div>

        <div className="bottom-controls">
          <button
            className={`control-btn ${!micOn ? "off" : ""}`}
            onClick={toggleMic}
          >
            {micOn ? <FaMicrophone /> : <FaMicrophoneSlash />}
          </button>

          <button
            className={`control-btn ${!cameraOn ? "off" : ""}`}
            onClick={toggleCamera}
          >
            {cameraOn ? <FaVideo /> : <FaVideoSlash />}
          </button>

          <button
            className={`control-btn ${screenSharing ? "screen-active" : ""}`}
            onClick={shareScreen}
          >
            <FaDesktop />
          </button>

          <button className="control-btn off" onClick={leaveCall}>
            <FaPhoneSlash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TherapyCall;
