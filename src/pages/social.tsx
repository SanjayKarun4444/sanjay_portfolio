export default function Social() {
    return (
      <section className="mt-8 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300"> {/* Added background and border */}
        <div className="flex justify-center space-x-6">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sanjaykarun/" target="_blank" rel="noopener noreferrer" className="inline-block">
            <img src="/linkedin_image.png" alt="LinkedIn" className="h-5 w-5 rounded-full social-icon" />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/sanjayky_/" target="_blank" rel="noopener noreferrer" className="inline-block">
            <img src="/instagram_image.jpeg" alt="Instagram" className="h-5 w-5 rounded-full social-icon" /> {/* Added social-icon class */}
          </a>
          {/* SoundCloud */}
          <a href="https://soundcloud.com/your_soundcloud_username" target="_blank" rel="noopener noreferrer" className="inline-block">
            <img src="/soundcloud_image.png" alt="SoundCloud" className="h-5 w-5 rounded-full social-icon" />
          </a>
        </div>
        <div>
            <a href="/">
                <button>Go back to the HomePage</button>
            </a>
        </div>
      </section>

      
    );
  }
  