import type { Metadata } from 'next';
import { FinalCTA } from '@/components/Sections';

export const metadata: Metadata = {
  title: 'Car Detailing Gallery Charleston WV',
  description: 'View before and after mobile car detailing results from Charleston Mobile Car Detailing. Real detail photos can be added here as the business grows.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Gallery</span>
          <h1>Mobile Car Detailing Gallery</h1>
          <p className="lead">Before and after photos will be one of the strongest trust builders on the website. These placeholders are ready for real detailing images.</p>
        </div>
      </section>

      <section className="section light">
        <div className="container grid-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div className="card" key={i}>
              <div className="image-placeholder" data-label={`Detail Photo ${i + 1}`} />
              <div className="card-body">
                <h3>{i % 2 === 0 ? 'Interior Detail' : 'Exterior Detail'}</h3>
                <p>Upload a real before or after photo here once you have customer work to showcase.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
