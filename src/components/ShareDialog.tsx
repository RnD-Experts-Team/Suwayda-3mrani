import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Copy, 
  MessageCircle, 
  Facebook, 
  Twitter,
  Share,
  Check
} from 'lucide-react';
import { useLanguage } from '@/LanguageContext';

interface ShareDialogProps {
  buttonText: string;
  title: string;
  url?: string;
}

export default function ShareDialog({ buttonText, title, url }: ShareDialogProps) {
  const { currentLanguage } = useLanguage();
  const [copySuccess, setCopySuccess] = useState(false);
  const currentUrl = url || window.location.href;

  // Function to copy URL to clipboard
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy link: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  // Social sharing functions
  const shareToWhatsApp = () => {
    const message = encodeURIComponent(`${title} - ${currentUrl}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const shareToFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(fbUrl, '_blank', 'width=600,height=400');
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const shareToTelegram = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`;
    window.open(telegramUrl, '_blank');
  };

  // Native share API (for mobile devices)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: currentUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="h-8 px-4 py-0 bg-primary text-primary-foreground rounded-2xl border-none min-w-[84px] max-w-[480px]"
        >
          <Share className="h-4 w-4 mr-2" />
          <span className="text-sm text-center leading-[21px] [font-family:'Newsreader-Medium',Helvetica] font-medium truncate">
            {buttonText}
          </span>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {currentLanguage === 'ar' ? 'مشاركة الرابط' : 'Share link'}
          </DialogTitle>
          <DialogDescription>
            {currentLanguage === 'ar' 
              ? 'اختر طريقة المشاركة المفضلة لديك' 
              : 'Choose your preferred sharing method'
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Copy Link Section */}
          <div className="space-y-2">
            <Label htmlFor="link">
              {currentLanguage === 'ar' ? 'نسخ الرابط' : 'Copy Link'}
            </Label>
            <div className="flex items-center space-x-2">
              <Input
                id="link"
                defaultValue={currentUrl}
                readOnly
                className="flex-1"
              />
              <Button
                type="button"
                size="sm"
                className="px-3"
                onClick={handleCopyLink}
              >
                {copySuccess ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            {copySuccess && (
              <p className="text-sm text-green-600">
                {currentLanguage === 'ar' ? 'تم نسخ الرابط!' : 'Link copied!'}
              </p>
            )}
          </div>

          {/* Social Media Buttons */}
          <div className="space-y-2">
            <Label>
              {currentLanguage === 'ar' ? 'مشاركة عبر' : 'Share via'}
            </Label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={shareToWhatsApp}
                className="justify-start"
              >
                <MessageCircle className="h-4 w-4 mr-2 text-green-600" />
                WhatsApp
              </Button>
              
              <Button
                variant="outline"
                onClick={shareToFacebook}
                className="justify-start"
              >
                <Facebook className="h-4 w-4 mr-2 text-blue-600" />
                Facebook
              </Button>
              
              <Button
                variant="outline"
                onClick={shareToTwitter}
                className="justify-start"
              >
                <Twitter className="h-4 w-4 mr-2 text-blue-500" />
                Twitter/X
              </Button>
              
              <Button
                variant="outline"
                onClick={shareToTelegram}
                className="justify-start"
              >
                <svg className="h-4 w-4 mr-2 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                </svg>
                Telegram
              </Button>
            </div>
          </div>

          {/* Native Share (for mobile) */}
{typeof navigator !== 'undefined' && 'share' in navigator && (
            <div className="pt-2 border-t">
              <Button
                variant="outline"
                onClick={handleNativeShare}
                className="w-full justify-start"
              >
                <Share className="h-4 w-4 mr-2" />
                {currentLanguage === 'ar' ? 'مشاركة أخرى' : 'More sharing options'}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
