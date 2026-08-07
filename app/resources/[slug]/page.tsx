import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { getResourceBySlug, resourceList } from "@/lib/content";
import { isPdfResource } from "@/lib/resource-links";
import { buildMetadata } from "@/lib/site";
import ResourceSections from "@/components/resources/ResourceSections";

type ResourceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return resourceList.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: ResourceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return buildMetadata("Resource Not Found", "The requested resource could not be found.");
  }

  return buildMetadata(resource.title, resource.description);
}

export default async function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const isPdf = isPdfResource(resource.fileUrl);
  const hasGallery = !!resource.galleryUrls?.length;
  const hasSections = !!resource.sections?.length;
  const isImageResource = !isPdf && /\.(png|jpe?g|webp|svg)$/i.test(resource.fileUrl);
  const pageCount = resource.galleryUrls?.length ?? (isPdf ? 1 : 0);

  return (
    <div style={{ width: "100%", minHeight: "calc(100vh - 80px)" }}>
      {isPdf ? (
        <>
          <PageHero
            description={resource.description}
            eyebrow={resource.category}
            title={resource.title}
            actions={
              <>
                <Button href={resource.fileUrl} target="_blank">
                  Open PDF
                </Button>
                <Button href="/resources" variant="secondary">
                  Back To Library
                </Button>
              </>
            }
            stats={[
              { value: "PDF", label: "Readable in-browser for a distraction-light study experience." },
              { value: "Focused", label: "Open the full material and continue with a clean reading surface." },
            ]}
            className="pb-6"
          />
          <iframe
            className="block w-full"
            src={resource.fileUrl}
            style={{ height: "calc(100vh - 80px - 330px)", border: "none" }}
            title={resource.title}
          />
        </>
      ) : hasSections ? (
        <div className="space-y-8 pb-14 md:pb-20">
          <PageHero
            description={resource.description}
            eyebrow={resource.category}
            title={resource.title}
            actions={
              <Button href="/resources" variant="secondary">
                Back To Library
              </Button>
            }
            stats={[
              { value: `${resource.sections?.length || 0}`, label: "Paras arranged for structured reading." },
              { value: "Guided", label: "Ideal for daily recitation, revision, and home practice." },
            ]}
          />
          <ResourceSections sections={resource.sections!} resourceTitle={resource.title} />
        </div>
      ) : hasGallery ? (
        <div className="space-y-8 pb-14 md:pb-20">
          <PageHero
            description={resource.description}
            eyebrow={resource.category}
            title={resource.title}
            actions={
              <Button href="/resources" variant="secondary">
                Back To Library
              </Button>
            }
            stats={[
              { value: `${pageCount}`, label: "Pages arranged in a comfortable vertical reading flow." },
              { value: "Guided", label: "Ideal for revision, parent support, and home practice." },
            ]}
          />
          <div className="page-shell mx-auto grid max-w-3xl gap-6">
            {resource.galleryUrls?.map((imageUrl, index) => (
              <Reveal delay={0.03 * (index + 1)} key={imageUrl}>
                <div className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-[0_18px_40px_rgba(16,28,21,0.08)]">
                  <Image
                    alt={`${resource.title} step ${index + 1}`}
                    className="h-auto w-full"
                    height={1200}
                    priority={index === 0}
                    src={imageUrl}
                    width={900}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      ) : isImageResource ? (
        <div className="space-y-8 pb-14 md:pb-20">
          <PageHero
            description={resource.description}
            eyebrow={resource.category}
            title={resource.title}
            actions={
              <>
                <Button href={resource.fileUrl} target="_blank">
                  Open Resource
                </Button>
                <Button href="/resources" variant="secondary">
                  Back To Library
                </Button>
              </>
            }
          />
          <div className="page-shell">
            <Reveal className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-[0_18px_40px_rgba(16,28,21,0.08)]">
              <Image
                alt={resource.title}
                className="h-auto w-full"
                height={1400}
                priority
                src={resource.fileUrl}
                width={1000}
              />
            </Reveal>
          </div>
        </div>
      ) : (
        <div className="space-y-8 py-20 text-center">
          <PageHero
            description={resource.description}
            eyebrow={resource.category}
            title={resource.title}
          />
        </div>
      )}
    </div>
  );
}
