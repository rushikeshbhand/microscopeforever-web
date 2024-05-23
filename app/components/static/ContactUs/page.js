const ContactUs = () => {
    return (
        <div className="mx-auto xl:mx-96 p-5">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">Feel free to get in touch with us. You can use the form below or email us directly at <a href="mailto:indrv5421@gmail.com" className="text-lime-600">indrv5421@gmail.com</a>.</p>
            
            <form className="max-w-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium">Name</label>
                    <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-4 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium">Email</label>
                    <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-4 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block font-medium">Subject</label>
                    <input type="text" id="subject" name="subject" className="w-full border border-gray-300 rounded-md px-4 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block font-medium">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2" required />
                </div>
                <button type="submit" className="bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-lime-700">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
