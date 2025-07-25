import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
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
      toast.error('Por favor, preencha pelo menos o nome e telefone.');
      return;
    }

    // Formatando mensagem para WhatsApp
    const message = `Olá! Gostaria de solicitar uma avaliação gratuita:
    
📝 *Nome:* ${formData.nome}
📱 *Telefone:* ${formData.telefone}
📍 *Cidade:* ${formData.cidade || 'Não informado'}
💬 *Mensagem:* ${formData.mensagem || 'Gostaria de mais informações sobre os serviços.'}

Aguardo retorno para agendarmos a avaliação!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecionando para o WhatsApp...');
    
    // Limpar formulário
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
            Solicite sua Avaliação
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            <strong>Solicite uma avaliação gratuita, onde você estiver!</strong>
            <br />
            Nossa equipe especializada vai até você para analisar o reparo 
            e apresentar a melhor solução.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Fale Conosco
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="cidade" className="block text-sm font-medium text-foreground mb-2">
                    Cidade
                  </label>
                  <Input
                    id="cidade"
                    name="cidade"
                    type="text"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    placeholder="Sua cidade"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Descreva o problema do seu veículo ou tire suas dúvidas..."
                    rows={4}
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                >
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <Card className="border-0 bg-brand-blue-light">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-semibold text-foreground">
                    Atendimento Imediato
                  </h4>
                </div>
                <p className="text-brand-gray mb-3">
                  Entre em contato conosco pelo WhatsApp para um atendimento 
                  rápido e personalizado.
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
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
                    Atendimento a Domicílio
                  </h4>
                </div>
                <p className="text-brand-gray">
                  Levamos nossos serviços até você! Atendemos toda a região 
                  metropolitana com a mesma qualidade e profissionalismo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-semibold text-foreground">
                    Horário de Funcionamento
                  </h4>
                </div>
                <div className="space-y-2 text-brand-gray">
                  <p><strong>Segunda a Sexta:</strong> 08h às 18h</p>
                  <p><strong>Sábado:</strong> 08h às 14h</p>
                  <p><strong>Domingo:</strong> Emergências</p>
                </div>
              </CardContent>
            </Card>

            {/* Destaque */}
            <div className="bg-primary text-primary-foreground rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-3">
                ✓ Avaliação 100% Gratuita
              </h4>
              <p className="text-primary-foreground/90">
                Não cobramos nada pela análise inicial. 
                Você só paga se aprovar o serviço!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;