import Wave from "react-wavify";

const WaveBackground = () => {
    return (
        <div className="absolute bottom-0 left-0 w-full h-[40vh] z-0">
            <Wave
                fill='#a0e9ff'
                paused={false}
                style={{ display: 'flex' }}
                options={{
                height: 10,
                amplitude: 20,
                speed: 0.15,
                points: 3,
                }}
                className="w-full h-full"
            />

            <Wave
                fill="#7dd3fc"
                paused={false}
                style={{ display: 'flex' }}
                options={{
                height: 70,
                amplitude:40,
                speed: 0.20,
                points: 4,
                }}
                className="w-full h-full absolute bottom-0 left-0 opacity-80"
            />
        </div>
    );
};

export default WaveBackground;