import { motion, useScroll } from 'motion/react'
import React from 'react'
// useScroll

const ScrollBasedAnimations = () => {

    const { scrollYProgress } = useScroll();

    return (
        <div className='p-10'>
            <motion.div className='w-full h-2 origin-left bg-yellow-500 fixed top-0 left-0' 
                initial={{scaleX:0}}
                style={{scaleX:scrollYProgress}}
            ></motion.div>

            <h1 className=' text-4xl font-bold text-center'>Hello World From Talha</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia quos tempore voluptatum sint nisi, delectus veniam molestias explicabo aspernatur maiores non assumenda. Dolorum, porro distinctio nisi dicta dolore quam?
                Ipsum inventore itaque, eligendi minus ut, excepturi similique consequatur provident aperiam pariatur qui facere nobis hic nesciunt, est veritatis incidunt. Earum numquam nesciunt rem placeat incidunt consectetur et? Nobis, sit.
                Porro ipsa est consequatur commodi delectus repellat beatae praesentium doloremque cum debitis optio placeat vero officiis, expedita quas a quo architecto dolorem temporibus. Provident vitae iusto eveniet. Maiores, temporibus aperiam.
                Dolorem quis excepturi exercitationem harum libero ad, eos itaque blanditiis incidunt molestiae praesentium necessitatibus officia aspernatur soluta, fugit rerum perspiciatis. Earum quas distinctio dignissimos tenetur est voluptates dolores eum nesciunt?
                Perferendis, maxime. Consequuntur earum, dignissimos eos molestiae eligendi, dicta nihil velit voluptatum fugit ut excepturi, ipsa quo. Tempora reiciendis vitae autem labore delectus, blanditiis natus tenetur quaerat, deserunt recusandae perferendis.
                Itaque ex sint corporis! Dicta iusto quidem placeat, consectetur quod fugiat consequatur earum dolorem sapiente incidunt, ex natus debitis praesentium. Id quas minus nostrum autem impedit nemo labore delectus dolorum. <br></br><br></br><br></br>
                Aliquid, eveniet obcaecati itaque incidunt illum voluptas dolore saepe, doloremque neque quod aspernatur distinctio? Earum repellendus blanditiis rem deleniti quas beatae architecto dolore ad libero optio delectus, ipsa atque. Nostrum!
                Numquam eum impedit aut debitis illo possimus, sequi repellendus praesentium officia, quasi, nostrum culpa. Repudiandae ducimus, facilis quis sint quas, qui impedit hic, in pariatur ad id et molestiae tenetur?
                Suscipit, ducimus iure. Dolorum enim quo quam! Eius reprehenderit corporis, sapiente obcaecati commodi numquam dignissimos quod. Ab perspiciatis laborum in ratione pariatur consequuntur libero vitae ipsa. Excepturi illum ullam suscipit.
                Ea, dignissimos! Ipsa incidunt cum, atque doloribus doloremque soluta ex! Assumenda, nihil asperiores delectus atque nobis doloremque tempore id voluptates ea, enim ratione aliquam laborum repellat exercitationem eum. A, placeat.
                Cupiditate quo sapiente similique iure sit, natus cum animi quidem, praesentium tenetur vel eligendi veritatis modi sint numquam ipsam odit distinctio soluta fugiat ducimus officiis in error! Tempora, odio cupiditate?
                Laboriosam magni odit ad soluta iure nemo, autem praesentium itaque quo dolore adipisci assumenda non suscipit. Placeat laboriosam, perferendis, quaerat culpa, mollitia itaque in atque illum totam dolores quidem cum!<br></br><br></br><br></br>
                Eos, maxime sunt debitis aliquam repellendus aperiam iusto obcaecati veritatis reiciendis officia, voluptatem, optio cumque corporis perspiciatis sint delectus? Sed eum aliquam deleniti totam dignissimos consequuntur exercitationem alias numquam ut.
                Excepturi fuga voluptatum incidunt ab tempore deserunt magni necessitatibus? Molestias sequi sit magni soluta, officiis, architecto facere quam autem delectus voluptate culpa at fugit enim? Error quas vero corrupti. A.
                Laborum fugit illo, repellendus obcaecati assumenda est ducimus nostrum? Nostrum aut, distinctio id ducimus blanditiis quis animi placeat totam dolorem nulla aperiam qui, aliquid mollitia officiis repudiandae alias modi ipsum!
                Cupiditate mollitia voluptatem fugiat odio veritatis a sunt debitis nostrum voluptatum maiores. Quae ex quasi accusamus eum atque, itaque voluptatibus, consequuntur non voluptatum possimus pariatur mollitia, est praesentium a expedita.
                Exercitationem est tempora cum dolore, commodi minima iusto culpa soluta. Eos inventore error cum corporis reiciendis, eius autem, molestias saepe deserunt repellendus voluptatem in a quod consectetur quam esse velit.
                Sunt impedit suscipit nemo distinctio hic id tempore praesentium rerum cum! Minus quae et iure soluta enim! Ullam ex eveniet aut, sed dolorem ipsam vitae. Perferendis obcaecati nisi iure a.
                Excepturi asperiores, deleniti explicabo distinctio doloremque itaque consequuntur maiores laboriosam perferendis, tempora nihil vero ipsa, iure dolorem magni! Voluptates ipsa voluptas perferendis asperiores officiis tempora vitae, quo tenetur vel beatae!
                Pariatur repellendus nisi dolor voluptatum quia hic in provident reprehenderit soluta, placeat fuga dolorum officia aliquid blanditiis doloremque, cum perspiciatis, modi vero consequuntur dolorem ipsum! Odio, impedit voluptatum? Ut, veritatis?<br></br><br></br><br></br>
                Recusandae accusamus aspernatur deserunt fugiat modi at perferendis consequatur vel, ducimus labore, vitae placeat! Quasi unde consequuntur hic ullam accusamus officia ratione molestias aliquid a quae et, exercitationem, id sequi.
                Maiores quaerat neque ducimus aperiam cum! Mollitia distinctio itaque earum at! Culpa, temporibus assumenda? In alias magni saepe excepturi accusantium odio dicta ut quam molestias nulla? Sit quasi laboriosam maiores.
                Provident tempora quam sequi nihil consectetur veniam molestiae mollitia, officiis iure obcaecati quisquam debitis voluptatibus laudantium modi quos aut reiciendis magni consequatur, accusamus laborum? Cupiditate ea aliquid debitis adipisci odio.
                Iste atque perspiciatis esse laudantium pariatur voluptatum nulla assumenda quaerat et, distinctio repellendus minima obcaecati, cupiditate consequatur, veritatis beatae dolores numquam necessitatibus nihil fuga molestias ipsam a exercitationem excepturi? Aperiam.
                Explicabo dolorum nisi officiis ipsum laborum sequi asperiores odio illum dolorem cupiditate. Aliquid est corrupti inventore, quae architecto necessitatibus nostrum ullam suscipit eius aut, eaque hic deserunt quod impedit animi?<br></br><br></br><br></br>
                Voluptatum voluptate, eveniet laborum labore praesentium repellat deserunt natus unde aliquid at eum soluta maxime, expedita velit, quo dignissimos? Quo iste qui minus, vitae officiis hic ab nam non provident.
                Quo sequi nobis maiores ipsam nihil expedita ullam accusamus quod illum numquam architecto voluptatibus cum veniam omnis voluptate mollitia, non quibusdam, dolore tenetur magni veritatis corporis et vero quis. Quo!
                Maxime porro pariatur vitae tempora, libero cupiditate voluptate doloribus minima harum id odit dolore temporibus similique ad? Alias, ad ut quaerat quasi doloremque facilis eveniet, modi laborum nam harum fugiat?
                Vitae, cumque quis provident labore excepturi nihil quaerat architecto corrupti nostrum amet ea eum iure? Fugit deleniti suscipit nihil exercitationem optio? Quos quis deleniti ea, quasi est animi. Placeat, incidunt?
                Provident architecto obcaecati quae doloremque atque animi vitae eius deserunt? Incidunt doloribus, numquam quisquam in quae dolorum molestiae adipisci ipsa nam. Ullam, fugiat? Tempora ab sequi, facilis fugiat nisi asperiores.
                Hic odio molestiae quasi iusto pariatur quaerat dolore autem nam! Velit illum earum ratione officiis optio. Architecto necessitatibus quis voluptas vitae aut. Exercitationem incidunt quidem alias laborum a iusto voluptates.
                Dicta, distinctio dolor! Dolorem obcaecati assumenda impedit quae, saepe ex nobis quos. Itaque sed ea quam rem officia placeat. Blanditiis consequatur voluptatibus, rem hic delectus ab quae quidem cum quam!
                Officiis, fugit similique. Tenetur quibusdam, molestiae veritatis ex laudantium adipisci, modi iusto facilis doloribus quis est! Nemo aspernatur, sed, tempora inventore veniam unde, velit voluptatem quos error tenetur magnam debitis?
                Laudantium et voluptatem ipsam, velit dolore earum, fugiat sapiente qui sed dicta necessitatibus itaque odit aliquid excepturi tenetur soluta alias, nesciunt quidem expedita voluptas voluptatum impedit! Voluptatem ab exercitationem debitis!
                Voluptatibus cupiditate possimus pariatur! Dolorem, nostrum modi. Rem deserunt sit quae voluptatibus voluptates quidem numquam dolorem, qui ad ipsa repudiandae eum culpa! Expedita quis eos iste autem vel illum odit!<br></br><br></br><br></br>
                Laborum nam suscipit sit culpa voluptatibus perferendis beatae blanditiis eveniet voluptatum est iusto, minus illum quo in repellat ullam. Quo enim et quae unde aspernatur error soluta nesciunt esse eligendi?
                Quasi modi commodi ipsam dolor doloremque assumenda consequuntur aliquam, fugit voluptatibus voluptas. Esse assumenda iste sunt placeat maxime vel quibusdam inventore provident. Neque eveniet beatae officiis repudiandae quaerat repellat voluptas.
                Recusandae numquam corrupti et veritatis suscipit exercitationem nemo accusamus nam. Facilis itaque dolor nobis sed eveniet sit veritatis eligendi voluptate harum accusantium, placeat nihil eaque unde soluta voluptatum labore qui.
                Minus provident quasi cum deserunt ad incidunt porro vitae similique amet facere soluta veritatis repellendus consectetur et, neque eum eaque. Facere iste distinctio maxime voluptates voluptas velit perferendis nemo eius.
                Natus suscipit rerum laboriosam, corporis quisquam nesciunt eaque impedit quis? Facere, ad odit quia eligendi, eum, nemo itaque illum porro possimus repellendus soluta. Reprehenderit culpa atque nobis laborum veritatis distinctio!
                Laboriosam, sunt? Sunt odit distinctio quia nemo doloremque ipsa quae, rerum illo provident repudiandae dignissimos eveniet maiores? Temporibus, magnam fugit. Suscipit quo dignissimos illo quis sint vitae quisquam, sequi perspiciatis!
                Veniam inventore libero magnam vero nemo! Magnam expedita ipsa maxime sequi necessitatibus, blanditiis repellat inventore corrupti numquam rerum nisi quo provident consequuntur, beatae eligendi harum totam adipisci? Ipsa, velit provident?
                Pariatur perspiciatis necessitatibus deleniti, laudantium perferendis doloremque minus aperiam sunt autem cum. Nostrum, deleniti rerum. Vel illo, nesciunt nobis tempora eum minus, quas, doloremque incidunt voluptatibus non est modi inventore!
                Praesentium consectetur dolor, debitis voluptatibus eius explicabo esse aliquam velit magnam. Sequi numquam officiis laboriosam blanditiis provident mollitia deleniti aspernatur, sunt ea, placeat dolores voluptates consectetur sed sapiente nulla quaerat?
                Assumenda, totam reiciendis! Excepturi architecto fugiat eos consequatur sit rerum, minima odio totam voluptatem autem quisquam sint incidunt ratione nihil dolorum maiores dignissimos quidem, in obcaecati quos veritatis, omnis eius?
                Asperiores eligendi sunt fugiat rem animi totam! Nesciunt corporis omnis natus officia exercitationem atque eligendi tempora, veniam sit in, sunt maiores officiis deleniti vel, quibusdam dignissimos harum quae impedit reiciendis.
                Magnam dicta deserunt, consectetur laborum ipsa vero modi fugiat quo perferendis quam est minima iure, quidem, assumenda illum earum. Soluta consectetur aperiam nobis minus beatae facere esse odio cupiditate fugiat!<br></br><br></br><br></br>
                Repudiandae doloribus minima vel laborum, debitis voluptatibus. Nulla itaque magni deserunt enim, eveniet mollitia ab obcaecati! Repudiandae facilis minima reiciendis nihil at dignissimos quibusdam et quod, nisi iusto, libero maxime.
                Suscipit mollitia, aliquid qui a sed repellendus, architecto maxime consequatur, facilis nostrum ratione. Pariatur, impedit totam dolore quae ipsum eaque quos itaque distinctio quas beatae laudantium suscipit, sunt iure expedita!
                Eius, facilis exercitationem cum obcaecati sequi repellendus amet aliquam debitis deserunt pariatur sint inventore neque placeat, ratione quaerat dolores quo dolor eum. Accusamus veritatis eos totam quis esse unde aut.
                Dignissimos impedit exercitationem id blanditiis sequi saepe, asperiores sed numquam odio facilis. Placeat tempora eligendi distinctio corporis voluptas commodi, repudiandae laudantium, cumque beatae facere qui cum illo sequi enim magnam!
                Accusamus beatae itaque possimus dolorem maxime velit fugiat dignissimos, libero eveniet deserunt illo vel a fugit corrupti officiis facilis modi voluptatibus illum ad provident delectus qui perspiciatis, asperiores quos! Sit!
                Numquam aperiam, repellat adipisci minima labore et deserunt officiis nulla rem cupiditate fugit? Consequatur exercitationem, itaque reprehenderit, ducimus quibusdam illum corporis distinctio aliquam nulla, sed inventore? Veniam alias blanditiis architecto.
                Ducimus minus nisi perferendis fuga beatae laborum odio dolorem veniam quos eius. Alias saepe asperiores illum blanditiis sit delectus, ratione eum. Deserunt animi adipisci perferendis sit doloribus iure at eum.
                Unde quos est perferendis eos atque, blanditiis nam, inventore corrupti temporibus obcaecati possimus saepe vitae. Omnis iste veritatis expedita hic fugit doloremque reprehenderit, illum totam id voluptates, pariatur provident sed!
                Est cupiditate dolor adipisci consequuntur sint voluptatibus ullam molestiae tempore necessitatibus impedit enim repellendus deleniti consectetur iure architecto eveniet ipsum explicabo, praesentium sapiente ad delectus consequatur dignissimos inventore fuga. Laudantium!
                Porro in quos, quod fugit iure aspernatur illum odit sapiente mollitia ab nesciunt, aperiam itaque ad nisi quibusdam voluptas voluptates amet enim, dolorum beatae laborum alias quisquam eos! Labore, officia.
                Facere, dolorum. Asperiores minima amet quisquam, eveniet, id aliquam ipsa itaque, esse eum nostrum reiciendis cumque dolorem aspernatur laborum voluptates obcaecati consequatur in odit iusto. Earum quasi totam quia quaerat.
                Sequi, nisi ipsum porro voluptatum quaerat a ipsam eius. Culpa sint consequuntur veritatis voluptatibus corporis? Aspernatur illum sequi, ducimus dolorum molestiae explicabo, eum eligendi consequatur quaerat, ipsa atque harum error?<br></br><br></br><br></br>
                Eveniet at corporis voluptate magni distinctio id minus fugit quasi qui nobis doloribus est ad eligendi quae, aut sint exercitationem et consectetur ipsa, dicta commodi earum iure aperiam! Maxime, iste.
                Sequi architecto voluptate optio. Quas quia error porro illo doloremque ex dolores consequatur aperiam, sed tempore modi in quae placeat aut ducimus distinctio incidunt, optio provident. Odio labore atque harum.
                Velit eveniet tempore, expedita esse dolores accusamus. Hic fugit doloribus magnam illum sed quos, deleniti perspiciatis aliquid pariatur dolorum? Facilis necessitatibus, minus modi numquam qui non ex tempore itaque expedita.
                Adipisci aut possimus maxime ea optio, voluptatem soluta deserunt illo, laborum aliquam libero officiis sunt distinctio ad. Enim maxime accusantium, provident atque, officiis perspiciatis aspernatur omnis assumenda obcaecati deleniti corporis.
                Autem repellat harum consequuntur fuga ea modi. Quisquam velit illo voluptatibus alias commodi quibusdam eum! Cupiditate odit fugiat excepturi repellendus ex commodi alias, dolorum labore officia maxime nobis repudiandae architecto?
                Eveniet quaerat sed harum, unde excepturi perferendis perspiciatis labore placeat voluptates accusantium officiis quibusdam nam maxime, delectus quia inventore, architecto molestias blanditiis. Non unde error maxime, aspernatur ad ex tempore.
                Voluptates, aut nulla voluptas libero non mollitia amet velit optio odit dolorum perspiciatis cum, eveniet fugiat! Dignissimos libero, doloremque quis ducimus beatae, odio ex non, omnis fugit mollitia aliquid alias.
                Facilis nihil omnis, a voluptate saepe perferendis, ipsam officiis repellat porro natus quae? Voluptatum optio similique commodi ab laudantium beatae delectus officia, ex hic, saepe, neque cupiditate rerum nobis totam.
                A totam quod omnis alias! Cum earum esse ratione, omnis, repellendus quasi aperiam recusandae doloremque dolores laboriosam voluptatum est quis nisi veniam at tempore perspiciatis consequuntur laborum ab, voluptatibus explicabo.
                Possimus eos optio repudiandae quibusdam architecto corporis quasi culpa atque nisi. Officiis at sit veniam officia rerum aspernatur aut consectetur nobis adipisci modi debitis, voluptatum ad deserunt a consequatur facere!
                Unde excepturi quos maxime odit reprehenderit quis nobis! Debitis minima, natus temporibus iste quibusdam corporis eius! Quam, iusto rem! Totam, eum cupiditate! Sint earum doloribus optio sunt eaque blanditiis nemo.
                Ipsum, commodi est. Obcaecati vitae deserunt totam magnam iusto suscipit inventore animi, architecto aliquam quasi quia necessitatibus sed vero magni debitis impedit iure sit veritatis facere. Quam enim excepturi quis!
                Veniam alias ex laboriosam provident ipsum cumque commodi maxime assumenda nam dolorum nesciunt, suscipit laudantium tempora enim vel iure modi rem! Neque sint ducimus, hic quia a vitae ipsum. Est.
                Illum aperiam, ab id amet suscipit odio repellat molestias architecto tenetur ipsa dolorem culpa eius sint vitae odit! Repellendus incidunt sint veniam illo magni dicta adipisci odio nesciunt quod ratione.
                At atque dignissimos aliquid suscipit impedit incidunt non! Est dolores consequatur ab beatae obcaecati vero expedita officia, dignissimos numquam consequuntur dolorum, molestiae modi dicta officiis cupiditate facere incidunt ipsam veniam?<br></br><br></br><br></br>
            </p>
        </div>
    )
}

export default ScrollBasedAnimations
