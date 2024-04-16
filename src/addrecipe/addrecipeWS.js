
export default function WS(){
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const ws = new WebSocket(`${protocol}://${window.location.host}/ws`);

    ws.onopen = (event) => {
        console.log("ws connected");
    };
    
}