import { clients } from "../constants";
import styles from "../style";


const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client)=>(
              <div key={client.id} className={`${styles.flexCenter} sm:min-w-[175px] min-w-[100px] m-5`}>
                <img src={client.logo} alt="client" className="sm:w-[175px] h-[100px] object-contain" />
              </div>
            ))}
        </div>
    </section>
  )
export default Clients;
