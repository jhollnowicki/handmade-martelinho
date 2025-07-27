import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cidade: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.telefone) {
      toast.error(t('contact.formError'));
      return;
    }

    const message = `${t('contact.whatsappIntro')}

📝 *${t('contact.nameLabel')}* ${formData.nome}
📱 *${t('contact.phoneLabel')}* ${formData.telefone}
📍 *${t('contact.cityLabel')}* ${formData.cidade || t('contact.notProvided')}
💬 *${t('contact.messageLabel')}* ${formData.mensagem || t('contact.defaultMessage')}

${t('contact.whatsappOutro')}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5541995063859?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    toast.success(t('contact.formSuccess'));

    setFormData({
      nome: '',
      telefone: '',
      cidade: '',
      mensagem: ''
    });
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            <strong>{t('contact.subtitle1')}</strong><br />
            {t('contact.subtitle2')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  {t('contact.section1.title')}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.nameLabel')}
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder={t('contact.namePlaceholder')}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.phoneLabel')}
                  </label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder={t('contact.phonePlaceholder')}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="cidade" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.cityLabel')}
                  </label>
                  <Input
                    id="cidade"
                    name="cidade"
                    type="text"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    placeholder={t('contact.cityPlaceholder')}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.messageLabel')}
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder={t('contact.messagePlaceholder')}
                    rows={4}
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                >
                  {t('contact.sendButton')}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 bg-brand-blue-light">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-semibold text-foreground">
                    {t('contact.section2.title')}
                  </h4>
                </div>
                <p className="text-brand-gray mb-3">
                  {t('contact.section2.text')}
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/5541995063859', '_blank')}
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  (41) 99506-3859
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-semibold text-foreground">
                    {t('contact.section3.title')}
                  </h4>
                </div>
                <p className="text-brand-gray">
                  {t('contact.section3.text')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-semibold text-foreground">
                    {t('contact.section4.title')}
                  </h4>
                </div>
                <div className="space-y-2 text-brand-gray">
                  <p>{t('contact.section4.week')}</p>
                  <p>{t('contact.section4.saturday')}</p>
                  <p>{t('contact.section4.sunday')}</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary text-primary-foreground rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-3">
                {t('contact.highlight.title')}
              </h4>
              <p className="text-primary-foreground/90">
                {t('contact.highlight.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
