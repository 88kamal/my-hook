import { useState } from 'react';

function Acc() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <h2>Almaty, Kazakhstan</h2>
      
            <section className="panel">
                <h3>Hello</h3>
                {isActive ? (
                    <p>hwjdjfksks
                         <button onClick={() => setIsActive(false)}>
                        X
                    </button>
                    </p>
                    
                ) : (
                    <button onClick={() => setIsActive(true)}>
                        Show
                    </button>
                )}
                 
                
            </section>
        </div>
    )
}

export default Acc