export default function hander(req, res) {
    res.status(200).json({ 
        text: 'hello',
        another_text: 'Another hello'
    });
}